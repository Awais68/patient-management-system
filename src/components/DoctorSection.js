/** @format */

import {
	Select,
	SelectContent,
	// SelectGroup,
	SelectItem,
	// SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import * as React from "react";
import { categories, doctors } from "@/lib/section";
import { Button } from "./ui/button";
import Link from "next/link";
// import Image from "next/image";
import { ClockIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { HomeIcon } from "@radix-ui/react-icons";

export default function DoctorSection({ isHome }) {
	const filtered = isHome ? doctors.slice(0, 6) : doctors;
	return (
		<div className='container mx-auto '>
			<div className='flex justify-between my-5'>
				<h1 className='font-3xl font-mono font-semibold '>Premium Doctors</h1>
				{isHome ? (
					<Link href={"/doctors"}>
						<Button>See All </Button>
					</Link>
				) : (
					<Select>
						<SelectTrigger className='w-44 rounded  '>
							<SelectValue placeholder='Select a Doctor ' />
						</SelectTrigger>
						<SelectContent>
							{categories.map((category) => (
								<SelectItem key={category} value={category}>
									{category}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				)}
			</div>

			<div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-10 rounded-3xl '>
				{filtered.map((doctor) => (
					<Card key={doctor.name}>
						<CardHeader>
							<div className=' bg-gradient-to-r from-indigo-300 '>
								<Avatar className='self-center h-20 w-20 rounded-full '>
									<AvatarImage
										className='flex justify-center '
										height={200}
										width={200}
										src='https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									/>
									<AvatarFallback className='font-semibold text-cyan-400'>
										DAS
									</AvatarFallback>
								</Avatar>
							</div>

							<CardTitle className='rounded-xl border bg-gradient-to-r from-violet-300 to-indigo-400 mx-auto p-2 my-2'>
								{doctor.name}
							</CardTitle>
							<CardDescription className='my-2 font-semibold font-xl'>
								{" "}
								{doctor.category}
							</CardDescription>
						</CardHeader>
						{!isHome && (
							<CardContent>
								<div className='flex justify-between mx-4'>
									<h1> Gender</h1>
									<h1>{doctor.gender}</h1>
								</div>

								<div className='flex justify-between items-center mx-4 '>
									<span className='font-bold flex  items-center gap-2'>
										<ClockIcon />
										Time
									</span>
									<h1>{doctor.appointment}</h1>
								</div>
								<div className=' flex justify-between items-center mx-3 '>
									<span className='font-bold flex  items-center gap-2'>
										{" "}
										<HomeIcon /> Hospital{" "}
									</span>
									<p className=' rounded-xl  p-2 font-semibold'>
										{" "}
										{doctor.hospital}
									</p>
								</div>
							</CardContent>
						)}

						<CardFooter>
							<Link href={`/doctors/${doctor.id}`}>
								<Button className=' rounded bg-gradient-to-r from-indigo-400 from-10% via-sky-300 via-50%'>
									{" "}
									Book Appointment
								</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
