import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instrustors from "@/components/Instrustors";
import MusicMovingCards from "@/components/MovingCards";
import UpcomingWebniars from "@/components/UpcomingWebniars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicMovingCards/>
      <UpcomingWebniars/>
      <Instrustors/> 
      <Footer/>
    </main>
  );
}
