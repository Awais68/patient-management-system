/** @format */
import connectDB from "@/lib/connectDB";

import { UserModal } from "../../../lib/models/UserModal";

export async function POST(req) {
	await connectDB();
	try {
		const obj = await req.json();
        console.log("data fatched==>", obj)

		let newUser = await new UserModal({ ...obj });
		newUser = await newUser.save();

		return Response.json(
			{
				error: false,
				msg: "User Registered Successfull",
				user: newUser,
			},
			{ status: 201 }
		);
	} catch (e) {
		return Response.json(
			{
				error: true,
				msg: "Something went Wrong ",
				user: newUser,
			},
			{ status: 400 }
		);
	}
}

export async function GET(req) {
	await connectDB();
	const users = await UserModal.find();
	return Response.json(
		{
			error: false,
			msg: "User Fetched Successfull ",
			users,
		},
		{ status: 200 }
	);
}

export async function PUT(req) {}
export async function DELETE(req) {}
