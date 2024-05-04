
import Services from "@/components/services";
import HeroSection from "@/components/heroSection";
import SideHero from "@/components/places";
import Reviews from "@/components/reviews";
import Footer from "@/components/footer";
import Explore from "@/components/explore";

export default function Home() {
 

  return (
    <div className=" w-full flex flex-col relative ">
      <HeroSection />

      <SideHero />

      <Services />

      <Explore />

      <Reviews />

      <Footer />
    
    </div>
  );
}
