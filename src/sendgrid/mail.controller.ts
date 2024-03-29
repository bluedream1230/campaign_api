import { Controller, Post, Query, Body } from "@nestjs/common";
import { SendgridService } from "src/sendgrid/sendgrid.service";
import CreateTextDto from "./dto/createText.dto";
import ForgotPasswordDto from "./dto/forgotPassword.dto";
import { getEmailHtml } from "./emailHtml";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Controller("mail")
export class MailController {
  constructor(
    private readonly sendgridService: SendgridService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) {}

  @Post("resetpassword")
  async sendResetPasswordEmail(@Body() body: ForgotPasswordDto) {
    const user = await this.usersService.getByEmail(body.userid);
    const { ...payload } = user;
    const access_token = this.jwtService.sign(payload);
    console.log(body);
    const url = `https://play.zoomingaming.com/auth/createpassword/${access_token}`;
    const message = getEmailHtml([
      { type: "element1", data: ["Password Reset"] },
      {
        type: "element2",
        data: [
          "You are receiving this email because you requested a password reset. Please click the link below to get started.",
        ],
      },
      { type: "element6", data: [url, "Reset Password"] },
    ]);
    const mail = {
      to: body.email,
      subject: "From ZoomIn",
      from: "info@em8559.zoomingaming.com", // Fill it with your validated email on SendGrid account
      text: "Reset your password",
      html: message,
    };

    return await this.sendgridService.send(mail);
  }

  @Post("resetpasswordnumber")
  async sendResetPasswordNumber(@Body() body: ForgotPasswordDto) {
    const user = await this.usersService.getByEmail(body.email);
    const { ...payload } = user;
    const access_token = this.jwtService.sign(payload);
    console.log(body);
    // const url = `https://play.zoomingaming.com/auth/createpassword/${access_token}`;
    const verifynumber = Number(Math.random().toString(9).slice(2, 8));
    const message = getEmailHtml([
      { type: "element1", data: ["Verify Number"] },
      {
        type: "element2",
        data: [
          "You are receiving this email because you requested a password reset. Please enter this number to reset password.",
        ],
      },
      { type: "element1", data: [verifynumber] },
    ]);
    const mail = {
      to: body.email,
      subject: "From ZoomIn",
      from: "info@em8559.zoomingaming.com", // Fill it with your validated email on SendGrid account
      text: "Reset your password",
      html: message,
    };

    return await this.sendgridService.sendverifynumber(mail, verifynumber);
  }

  @Post("sendmail")
  async sendEmail(@Query("email") email, @Body() body: CreateTextDto) {
    console.log(body);
    const message = getEmailHtml([
      { type: "element1", data: ["Support"] },
      {
        type: "element2",
        data: [body.text],
      },
      {
        type: "element2",
        data: [`From ${body.email}`],
      },
      // { type: "element6", data: [body.sender] },
    ]);
    const to = "team@zoomingaming.com";
    const mail = {
      to: to,
      subject: "From ZoomIn",
      from: "info@em8559.zoomingaming.com", // Fill it with your validated email on SendGrid account
      text: "Support",
      html: message,
    };

    return await this.sendgridService.send(mail);
  }
}
