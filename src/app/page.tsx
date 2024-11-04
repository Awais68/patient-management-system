import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <DoctorsSection isHome={true} /> */}
    </div>
  );
}
