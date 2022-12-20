import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller("payments")
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  @Post()
  async createPayments(@Body() paymentRequestBody: any) {
    const res = await this.paymentService.createPayment(paymentRequestBody);
    return res;
  }
}
