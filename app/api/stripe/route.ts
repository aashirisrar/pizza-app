import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(req : Request)
{
    try{
        let {price} = await req.json(); // Get the price from the request
        price *= 100; // Convert the price to cents

        const stripeSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Pizza',
                        },
                        unit_amount: price,
                    },
                },
            ],
            mode: 'payment',
            success_url: 'https://localhost:3000',
            cancel_url: 'https://localhost:3000',
        });

        return NextResponse.json({message:"Success"}, {status:200});
        
    }catch(e){
        console.log(e);
    }
}