/** @format */

// "use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "../../auth";

export default async function HeroSection() {
	const session = await auth();
	return (
		<>
			<section className='text-gray-600 body-font'>
				<h1 className='w-[80%] flex flex-col justify-center mt-2 mx-auto  text-center   text-black font bold title-font sm:text-4xl text-3xl mb-4 font-semibold   '>
					Well Come To Our Doctor Appointment System{" "}
				</h1>
				<div className='container mx-auto flex px-5 py-5 md:flex-row flex-col items-center  justify-between'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900'>
							Make Your Appointment with EasyAppointment
							<br className='hidden lg:inline-block text-gray-300 bg-blue-500' />
							Take Our Specilist just onClick
						</h1>
						<p className='mb-8 leading-relaxed'>
							Your health is important—make it easy with EasyAppointment. Book,
							manage, and track your doctor appointments with just a few clicks.
						</p>
						<div className=' justify-center inline-block'>
							<Button className='inline-flex text-white bg-indigo-700 border-b-pink-600 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg'>
								Find Doctor You Need
							</Button>

							<Link
								href={session ? "/doctors/apply" : "/signin"}
								className='ml-4 inline-flex text-gray-700 bg-gray-100 border-b-4 py-2 px-6 focus:outline-1 hover:bg-gray-200 rounded text-lg'>
								Apply As a Doctor
							</Link>
						</div>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 justify-end'>
						<Image
							className='object-cover object-center rounded mx-auto flex-row justify-end items-end'
							alt='hero'
							height={200}
							width={400}
							src='https://images.unsplash.com/photo-1674702703321-b44990d8b6ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxkb2N0b3JzfGVufDB8fDB8fHww'
						/>
					</div>
				</div>
			</section>
			;
		</>
	);
}
