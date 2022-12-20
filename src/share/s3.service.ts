import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as aws from "aws-sdk";
import * as fs from "fs";

@Injectable()
export class S3Service {
  private readonly s3: aws.S3;
  private prefix = "v3";

  bucketName = process.env.AWS_BUCKET_NAME;
  region = process.env.AWS_BUCKET_REGION;
  accessKeyId = process.env.AWS_ACCESS_KEY;
  secretAccessKey = process.env.AWS_SECRET_KEY;
  constructor() {
    // Configure AWS to use promise
    // aws.config.setPromisesDependency(require("bluebird"));

    aws.config.update({
      region: this.region,
      accessKeyId: this.accessKeyId,
      secretAccessKey: this.secretAccessKey,
      signatureVersion: "v4",
    });
    this.s3 = new aws.S3();
  }

  addIdentity(key: string) {
    const position = key.lastIndexOf(".");
    const firstPart = key.substring(0, position);
    const ext = key.substring(position, key.length);
    return `${firstPart}-${Date.now()}${ext}`;
  }

  upload(path: string, file: Express.Multer.File): Promise<string> {
    const key = `${this.prefix}/${path}/${this.addIdentity(file.originalname)}`;
    const filePath = file.path;
    console.log(file.path);
    const params: aws.S3.PutObjectRequest = {
      Bucket: this.bucketName,
      Key: key,
      Body: fs.createReadStream(filePath),
      ContentType: file.mimetype,
    };
    return new Promise((resolve, reject) => {
      this.s3.upload(params, (err, data) => {
        if (file.path && fs.existsSync(file.path)) fs.unlinkSync(file.path);
        if (err) reject(err);
        resolve(data.Location);
      });
    });
  }
}
