/** @format */

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, Fallback } from "@radix-ui/react-avatar";
import { EyeIcon } from "lucide-react";
import Image from "next/image";

export default function DoctorDetailSheet({ doctor }) {
	return (
		<Sheet>
			<SheetTrigger>
				<EyeIcon />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Doctor Details </SheetTitle>
					<SheetDescription>
						<div className="flex gap-3">

						<Avatar className='self-center h-20 w-20 rounded-full '>
							<AvatarImage src={doctor.user.picture} />
							<AvatarFallback className='font-semibold text-cyan-400'>
								DAS
							</AvatarFallback>
						</Avatar>
						<h1 className="font-bold text-3xl">
							{doctor.user.firstName + " " + (doctor?.user?.firstName || " ")}
						</h1>
						Doctors are the cornerstone of healthcare, dedicating their
						expertise and compassion to improving lives. Their commitment to
						healing, guiding, and innovating ensures the well-being of
						individuals and communities. With resilience and empathy, they
						navigate challenges and inspire hope, making a profound impact on
						society every day.
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
