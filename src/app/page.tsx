import HeroSection from "@/components/HeroSection";
// import Header from "@/components/Header";
import DoctorSection from "@/components/DoctorSection";
// import Doctors from "@/app/doctors/page"



export default function Home() {
  return (
    <div className="min-h-screen">
      
      <HeroSection />
      <DoctorSection isHome={true}/>
      

      
    </div>
  );
}
