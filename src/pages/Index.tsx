import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroSection from "@/components/HeroSection";
import VillaGallery from "@/components/VillaGallery";
import OurStoryTeaser from "@/components/OurStoryTeaser";
import WhyGloryNest from "@/components/WhyGloryNest";
import ImagineYourStay from "@/components/ImagineYourStay";
import BookingSection from "@/components/BookingSection";
import WhyGuestsLove from "@/components/WhyGuestsLove";
import EFundBanner from "@/components/EFundBanner";
import GuestTestimonials from "@/components/GuestTestimonials";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StickyBookingBar />
      <main>
        <HeroSection />
        <VillaGallery />
        <OurStoryTeaser />
        <WhyGloryNest />
        <BookingSection />
        <WhyGuestsLove />
        <EFundBanner />
        <GuestTestimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
