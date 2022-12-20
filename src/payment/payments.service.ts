import { Injectable } from "@nestjs/common";
import Stripe from "stripe";

@Injectable()
export class PaymentsService {
  private stripe;
  constructor() {
    this.stripe = new Stripe(process.env.API_SECRET_KEY, {
      apiVersion: "2022-11-15",
    });
  }

  async createPayment(paymentRequestBody: any): Promise<any> {
    console.log(paymentRequestBody);
    const customer = await this.stripe.customers.create({
      name: paymentRequestBody.name,
      email: paymentRequestBody.email,
      payment_method: paymentRequestBody.paymentMethod,
      invoice_settings: {
        default_payment_method: paymentRequestBody.paymentMethod,
      },
    });

    /// create product
    const product = await this.stripe.products.create({
      name: "Subscribe zoom in",
    });

    /// create price
    const price = await this.stripe.prices.create({
      unit_amount: Number(paymentRequestBody.price) * 100,
      currency: "usd",
      recurring: { interval: "month" },
      product: product.id,
    });

    // create a stripe subscription
    const subscription = await this.stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_settings: {
        payment_method_options: {
          card: {
            request_three_d_secure: "any",
          },
        },
        payment_method_types: ["card"],
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
    });

    // return the client secret and subscription id
    return {
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      subscriptionId: subscription.id,
    };
  }
}
