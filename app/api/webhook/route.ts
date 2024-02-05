import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    const session = event.data.object as Stripe.Checkout.Session;
    if (event.type === "checkout.session.completed") {
      await prisma.order.update({
        where: {
          id: session.metadata?.id,
        },
        data: {
          orderStatus: true,
        },
      });
    }
    return new Response(null, { status: 200 });
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }
}
