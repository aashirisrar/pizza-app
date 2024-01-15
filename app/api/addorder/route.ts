import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, order } = await req.json();

    const newOrder = await prisma.order.create({
      data: {
        name,
        email,
        phone,
        address,
        order: JSON.stringify(order),
      },
    });

    return NextResponse.json({ message: "Order added", data: newOrder });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
