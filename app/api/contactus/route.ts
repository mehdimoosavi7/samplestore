import Message from "@/app/models/Message";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, email, phone, subject, message } = await request.json();
  try {
    await connect();
    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message
    });
    newMessage.save();
    return new NextResponse("Message has been created", { status: 201 });
  } catch {
    return new NextResponse("Message create error", { status: 500 });
  }
};
