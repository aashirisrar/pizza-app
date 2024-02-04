import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let { cost } = await req.json(); // Get the price from the request
    cost *= 100; // Convert the price to cents
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Pizza",
            },
            unit_amount: cost,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://localhost:3000",
      cancel_url: "https://localhost:3000",
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (e) {
    console.log(e);
  }
}
