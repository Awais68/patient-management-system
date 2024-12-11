/** @format */
import connectDB from "@/lib/connectDB";
import { UserModal } from "../../../lib/models/UserModal";
export async function POST(req) {
	await connectDB();
	try {
		const obj = await req.json();
		//console.log("obj", obj);
		let newUser = await new UserModal(...obj, { role: "user" });
		newUser = await newUser.save();
		console.log("newUser", newUser);
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
				details: "error" + e,
			},
			{ status: 400 }
		);
	}
}

export async function GET(req) {
	await connectDB();
	try {
		const users = await UserModal.find();
		//console.log("users", users);
		return Response.json(
			{
				error: false,
				msg: "User Fetched Successfull ",
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

export async function PUT(req) {
	await connectDB();
	try {
		const obj = await req.json();
		//console.log("obj", obj);
		let user = await UserModal.findOneAndUpdate(
			{ _id: obj.id },
			{ role: obj.role }
		).exec();
		user = await user.save();
		console.log("update user in api", user);
		return Response.json(
			{
				error: false,
				msg: "User Updated Successfull",

				user: user,
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
export async function DELETE(req) {}
