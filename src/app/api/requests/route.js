/** @format */
import connectDB from "@/lib/connectDB";

import { RequestModal } from "../../../lib/models/RequestModal";
// import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  try {
    const obj = await req.json();
    console.log("await req.json()", obj);

    const isUserRequestedBefore = await RequestModal.findOne({
      user: obj.user,
    });

    if (isUserRequestedBefore) {
      return Response.json(
        {
          error: true,
          msg: "Your had already applied as a doctor ",
        },
        { status: 403 }
      );
    }
    let newRequest = await new RequestModal({ ...obj });
    // //console.log("newUser", newUser);
    // //console.log("data fatched==>", obj);

    newRequest = await newRequest.save();
    //console.log("newRequest", newRequest);

    return Response.json(
      {
        error: false,
        msg: "Request Registered Successfull",
        request: newRequest,
      },
      { status: 201 }
    );
  } catch (e) {
    return Response.json(
      {
        error: true,
        msg: "Something went Wrong ",
        details: "error" + e,
      },
      { status: 400 }
    );
  }
}

export async function GET(request) {
  await connectDB();
  try {
    const requests = await RequestModal.find({});
    //console.log("users", users);
    return Response.json(
      {
        error: false,
        msg: "Request Fetched Successfull ",
        users: users,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        error: true,
        msg: "User not Fetched Successfull ",
        // users: users,
      },
      { status: 200 }
    );
  }
}

export async function PUT(req) {}
export async function DELETE(req) {}
