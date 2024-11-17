/** @format */

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";
import React, { useCallback } from "react";
import { useDropzone, Dropzone } from "react-dropzone";

// Define form schema using Zod
const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 6 characters").max(50),
	bio: z.string().min(2, "Bio must be at least 2 characters").max(120),
	hospital: z.string().min(2, "Hospital must be at least 2 characters").max(50),
	fees: z.string().min(2, "Fees must be at least 2 characters").max(50),
	gender: z.string().min(2, "Gender must be at least 2 characters").max(50),
	time: z.string().min(2, "Time must be at least 2 characters").max(50),
	appointment: z
		.string()
		.min(2, "Appointment must be at least 2 characters")
		.max(50),
	degree: z.string().min(2, "Degree must be at least 2 characters").max(50),
	specialization: z
		.string()
		.min(2, "Specialization must be at least 2 characters")
		.max(50),
	experience: z
		.string()
		.min(2, "Experience must be at least 2 characters")
		.max(50),
	profileImg: z
		.string()
		.min(2, "Profile image URL must be at least 2 characters")
		.max(50),
	number: z
		.string()
		.min(2, "Phone number must be at least 11 characters")
		.max(50),
	email: z.string().email("Invalid email address"),
	addres: z.string().min(2, "Address must be at least 2 characters").max(50),
});

export default function DoctorForm() {
	const { toast } = useToast();
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			bio: "",
			hospital: "",
			fees: "",
			gender: "",
			time: "",
			appointment: "",
			degree: "",
			specialization: "",
			experience: "",
			profileImg: "",
			number: "",
			email: "",
			addres: "",
		},
	});

	async function onSubmit(values) {
		console.log(values);
		values.user = session.user._id;
		console.log("values=>", values);
		const response = await addRequest(values);
		console.log("response=>", response);
		if (response.error) {
			form.reset();
			toast({
				title: "Sorry , Your application cannot be submitted.",
				description: response.msg,
			});
		} else {
			form.reset();
			toast({
				title: "Your application is submitted.",
				
				description: "You will be informed by email in 3 business days.",
				description: "You will be informed by email in 3 business days.",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				<div className=' grid grid-cols-1 m-2 lg:grid-cols-2 gap-5 p-4 '>
					<FormField
						name='hospital'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Hospital</FormLabel>
								<FormControl>
									<Input placeholder='Enter hospital name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='fees'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Fees</FormLabel>
								<FormControl>
									<Input placeholder='Enter fees' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='gender'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Gender</FormLabel>
								<FormControl>
									<Input placeholder='Enter gender' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='appointmentTime'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Appointment Time</FormLabel>
								<FormControl>
									<Input type='time' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='degree'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Degree</FormLabel>
								<FormControl>
									<Input placeholder='Enter degree' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='specialization'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Specialization</FormLabel>
								<FormControl>
									<Input placeholder='Enter specialization' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='experience'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Experience</FormLabel>
								<FormControl>
									<Input placeholder='Enter years of experience' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='number'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contact Number</FormLabel>
								<FormControl>
									<Input placeholder='Enter contact number' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name='address'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Input placeholder='Enter address' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='bio'
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bio</FormLabel>
								<FormControl>
									<Textarea placeholder='Enter bio' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button
					className='w-[100px] flex mx-auto bg-blue-300 rounded-2xl justify-center'
					type='submit'>
					{form.formState.isSubmitting ? "Loading" : "Submit"}
				</Button>
			</form>
		</Form>
	);
}

{
	/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
						{({ getRootProps, getInputProps }) => (
							<section>
								<div {...getRootProps()}>
									<input {...getInputProps()} />
									<p>Drag 'n' drop some files here, or click to select files</p>
								</div>
							</section>
						)}
							function MyDropzone() {
		const onDrop = useCallback((acceptedFiles) => {
			// Do something with the files
		}, []);
					</Dropzone>
	} */
}
