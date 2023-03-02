import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as SendGrid from "@sendgrid/mail";

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>("SEND_GRID_KEY"));
  }

  async send(mail: SendGrid.MailDataRequired) {
    const transport = await SendGrid.send(mail);
    // avoid this on production. use log instead :)
    return transport;
  }

  async sendverifynumber(mail: SendGrid.MailDataRequired, verifynumber) {
    const transport = await SendGrid.send(mail);
    console.log(verifynumber);
    return { transport, verifynumber };
  }
}
