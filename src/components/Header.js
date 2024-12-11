/** @format */

import * as React from "react";

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { auth, signOut } from "../../auth";
import Image from "next/image";

export default async function Header() {
	const session = await auth();
	//console.log("session in Header==>", session);
	return (
		<>
			<div className='text-gray-600 body-font'>
				<div className='container border-b-1 shadow-blue-500  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
					<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
						<span className=' text-2xl font-serif'>EasyAppintment </span>
						<span className='ml-1 font- text-gray-400 mt-2 '>
							Just a Click Away{" "}
						</span>
					</a>
					<nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
						<Link href={"/"} className='mr-5 hover:text-blue-500'>
							Home
						</Link>
						<Link href={"/doctors"} className='mr-5 hover:text-blue-500'>
							Doctors
						</Link>
						<Link href={"/facilities"} className='mr-5 hover:text-blue-500'>
							Hospital Facilities{" "}
						</Link>
						<Link href={"/contact"} className='mr-5 hover:text-blue-500'>
							Contact Us{" "}
						</Link>
						<Link href={"/About"}>About Us </Link>
					</nav>
					{session ? (
						<Menubar>
							<MenubarMenu>
								<MenubarTrigger>
									<Avatar>
										<Image
											src={session?.user?.image}
											height={40}
											width={40}
											className='rounded-full'
										/>
									</Avatar>
								</MenubarTrigger>
								<MenubarContent>
									<Link href={"/profile"}>
										<MenubarItem>
											Profile <MenubarShortcut>⌘T</MenubarShortcut>
										</MenubarItem>
									</Link>
									<Link href={"/appointment"}>
										<MenubarItem>My Appointment </MenubarItem>
									</Link>
									<MenubarSeparator />

									<form
										action={async () => {
											"use server";
											await signOut("google");
										}}>
										<Button type='submit' className='bg-white text-black p-4'>
											logout
										</Button>
									</form>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					) : (
						<Link href={"/signin"}>
							<Button variant={"outline"}>Login</Button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
