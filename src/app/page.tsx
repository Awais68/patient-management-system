import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import DoctorSection from "@/components/DoctorSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DoctorSection />
      {/* <DoctorsSection isHome={true} /> */}
    </div>
  );
}
