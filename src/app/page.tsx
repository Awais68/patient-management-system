/** @format */

import HeroSection from "@/components/HeroSection";
// import Header from "@/components/Header";
import DoctorSection from "@/components/DoctorSection";
// import Doctors from "@/app/doctors/page";
// import AppSidebar from "@/components/appSidebar";

export default function Home() {
	return (
		<div className='min-h-screen'>
			<HeroSection />
			<DoctorSection isHome={true} />
			{/* <AppSidebar /> */}
		</div>
	);
}
