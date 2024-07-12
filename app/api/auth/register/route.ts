import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/models/User";

export const POST = async (request : any) => {
  const { name, email, password } = await request.json();
  try {
    await connect();
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      name,
      email,
      pass: hashedPassword,
    });
    newUser.save();
    return new NextResponse("user has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("User Create Error " + error, { status: 500 });
  }
};
