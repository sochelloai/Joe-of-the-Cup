import { NextResponse } from "next/server";
import Stripe from "stripe";

let stripe: Stripe | null = null;
const getStripe = () => {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "dummy_key", {
      apiVersion: "2026-07-29.dahlia",
    });
  }
  return stripe;
};

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    // Map cart items to Stripe line_items using dynamic price_data.
    // This allows creating Checkout Sessions without pre-creating Products in the Stripe dashboard.
    const lineItems = items.map((item: any) => {
      // Map item IDs to their corresponding clean packaging image filenames
      // e.g. bag_01_whole_bean -> drop_dead_fred.png
      let imageName = "drop_dead_fred.png";
      if (item.id.startsWith("bag_01")) {
        imageName = "drop_dead_fred.png";
      } else if (item.id.startsWith("bag_02")) {
        imageName = "damn_daniel.png";
      } else if (item.id.startsWith("bag_03")) {
        imageName = "dapper_dan.png";
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.format,
            images: [`${origin}/products/${imageName}`],
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
        },
        quantity: item.quantity,
      };
    });

    // Create Checkout Session
    const stripeInstance = getStripe();
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}?success=true`,
      cancel_url: `${origin}?canceled=true`,
      shipping_address_collection: {
        allowed_countries: ["US"], // Limited to US as requested
      },
      phone_number_collection: {
        enabled: false,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Checkout Session Error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
