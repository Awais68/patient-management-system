/** @format */

import DoctorForm from "@/components/ApplyForm";
import { auth } from "../../../../auth";

export default async function ApplyAsDoctor() {
	const session = await auth();
	return (
		<div className='container mx-auto'>
			<h1 className='font-bold text-2xl mt-10 text-center'>
				Apply as a Doctor in our Platform
			</h1>
			<div className='p-4 mx-6 text-gray-500  justify-center'>
				<div>
					{" "}
					Must possess a valid medical degree (e.g., MBBS, MD, or equivalent).
				</div>

				<div>
					{" "}
					Must hold a valid medical license issued by a recognized medical board
					or council.
				</div>
				<div>
					Provide proof of registration with the appropriate medical authority
					(e.g., Medical Council ID).
				</div>
				<div>
					{" "}
					Minimum years of clinical experience (e.g., 2+ years in practice)..
				</div>
				<div>
					{" "}
					Fresh graduates may apply for mentorship or trainee roles if
					applicable.
				</div>
			</div>

			<DoctorForm session={session} />
		</div>
	);
}
