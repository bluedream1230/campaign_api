import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller("payments")
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  @Post()
  async createPayments(@Body() paymentRequestBody: any) {
    console.log(paymentRequestBody);
    const res = await this.paymentService.createPayment(paymentRequestBody);
    return res;
  }

  @Post("create-checkout-session")
  async createCheckOutSession(@Body() paymentRequestBody: any) {
    console.log(paymentRequestBody);
    const res = await this.paymentService.createCheckOutSession(
      paymentRequestBody
    );
    return res;
  }

  @Post("checkout-session")
  async checkOutSession(@Body() paymentRequestBody: any) {
    console.log("paymentRequestBody", paymentRequestBody);
    const res = await this.paymentService.checkOutSession(paymentRequestBody);
    return res;
  }

  @Get("webhook")
  async stripeWebhook(@Body() paymentRequestBody: any) {
    console.log(paymentRequestBody);
    // const res = await this.paymentService.stripeWebhook(
    //   paymentRequestBody
    // );
    return null;
  }
}
