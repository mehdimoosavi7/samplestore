import Blog from "@/app/models/Blogs";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const blog = await Blog.aggregate([
      {
        $lookup: {
          from: "admins",
          localField: "author",
          foreignField: "_id",
          as: "author",
          pipeline: [
            { $project: { _id: 0, name: 1, photo: 1 } },
            {
              $lookup: {
                from: "pictures",
                localField: "photo",
                foreignField: "_id",
                as: "photo",
                pipeline: [{ $limit: 1 }, { $project: { _id: 0, src: 1 } }],
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "pictures",
          localField: "pictures",
          foreignField: "_id",
          as: "pictures",
          pipeline: [{ $limit: 1 }, { $project: { _id: 0, src: 1 } }],
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "comments",
          foreignField: "_id",
          as: "comments",
          pipeline: [{ $count: "count" }],
        },
      },
      { $sample: { size: 3 } },
    ]);
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error " + error, { status: 500 });
  }
};
