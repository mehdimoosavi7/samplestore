import Product from "@/app/models/Product";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    await connect();

    const products = await Product.aggregate([
      // { $sort: { points: 1 } },
      {
        $project: { specs: 0, comments: 0 },
      },
      {
        $lookup: {
          from: "pictures",
          localField: "pictures",
          foreignField: "_id",
          as: "pictures",
          pipeline: [{ $limit: 1 }],
        },
      },
      {
        $lookup: {
          from: "brands",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
          pipeline: [{ $project: { logo: 0 } }],
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
    ]);
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error " + error, { status: 500 });
  }
};
