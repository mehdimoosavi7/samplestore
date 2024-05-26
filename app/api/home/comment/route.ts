import User from "@/app/models/User";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const comments = await User.aggregate([
      { $project: { name: 1, photo: 1, comments: 1 } },
      {
        $lookup: {
          from: "comments",
          localField: "comments",
          foreignField: "_id",
          as: "comments",
        },
      },
      {
        $lookup:{
          from: "pictures",
          localField: "photo",
          foreignField: "_id",
          as: "photo"
        }
      }
    ]);
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error " + error, { status: 500 });
  }
};
