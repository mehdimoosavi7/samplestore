import Banner from "@/src/app/models/Banner";
import connect from "@/src/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const banners = await Banner.find().limit(3);
    return new NextResponse(JSON.stringify(banners), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error " + error, { status: 500 });
  }
};
