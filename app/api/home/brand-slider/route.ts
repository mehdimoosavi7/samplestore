import Brand from "@/app/models/Brand";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const brands = await Brand.find();
    return new NextResponse(JSON.stringify(brands), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error " + error, { status: 500 });
  }
};
