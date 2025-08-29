import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyGloryNest from "@/components/WhyGloryNest";
import ImagineYourStay from "@/components/ImagineYourStay";
import RoomsSnapshot from "@/components/RoomsSnapshot";
import AtAGlance from "@/components/AtAGlance";
import LocationSection from "@/components/LocationSection";
import WhyGuestsLove from "@/components/WhyGuestsLove";
import OurStoryTeaser from "@/components/OurStoryTeaser";
import EFundBanner from "@/components/EFundBanner";
import GuestTestimonials from "@/components/GuestTestimonials";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhyGloryNest />
        <ImagineYourStay />
        <RoomsSnapshot />
        <AtAGlance />
        <LocationSection />
        <WhyGuestsLove />
        <OurStoryTeaser />
        <EFundBanner />
        <GuestTestimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
