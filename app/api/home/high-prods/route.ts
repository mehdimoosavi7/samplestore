import Product from "@/src/app/models/product";
import connect from "@/src/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const products = await Product.aggregate([
      { $sort: { points: 1 } },
      {
        $project: { specs: 0, details: 0, category: 0, comments: 0, brand: 0 },
      },
      {
        $lookup: {
          from: "pictures",
          localField: "pictures",
          foreignField: "_id",
          as: "pictures",
        },
      },
    ]).limit(20);
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error " + error, { status: 500 });
  }
};
