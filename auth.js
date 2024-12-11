/** @format */

import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/UserModal";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

async function handleLogin(obj) {
	// console.log("handleLogin", handleLogin);
	await connectDB();
	const user = await UserModal.findOne({ email: obj.email });
	console.log("user", user);
	if (user) {
		return user;
	} else {
		let newUser = await UserModal(obj);
		console.log("newuser", newUser);
		newUser = await newUser.save();
		return newUser;
	}
}
export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],

	callbacks: {
		async signIn({ account, profile }) {
			console.log("account ==>>", account);
			console.log("profile ==>>", profile);
			if (account.provider === "google") {
				let obj = {
					firstName: profile.given_name,
					lasName: profile.family_name,
					email: profile.email,
					picture: profile.picture,
					role: "user",
				};
				const user = await handleLogin(obj);
				return { user };
			}
			return true;
		},
		// async jwt({ token, user }) {
		// 	let userInfo = await handleLogin({ email: token.email });

		// 	token.role = userInfo.role;
		// 	token._id = userInfo._id;
		// 	console.log("user=>", user_id);
		// 	if (userInfo) {
		// 		// User is available during sign-in
		// 		token._id = userInfo._id;
		// 	}
		// 	return token;
		// },
		// session({ session, token }) {
		// 	session.userInfo._id = token._id;
		// 	session.userInfo.role = token.role;
		// 	return session;
		// },
	},
});
