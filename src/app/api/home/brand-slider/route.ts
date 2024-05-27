import Brand from "@/src/app/models/Brand";
import connect from "@/src/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const brands = await Brand.find();
    return new NextResponse(JSON.stringify(brands), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error " + error, { status: 500 });
  }
};
