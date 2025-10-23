import { useState, useEffect } from "react";
import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ContactDialog from "./ContactDialog";

const StickyBookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="glass-card-luxury border-t-2 border-primary/30 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Info */}
            <div className="flex items-center gap-3 flex-1">
              <img 
                src="/logo/PNG/glorynest_submark_terracotta.png" 
                alt="Glory Nest" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-serif font-semibold text-lg">
                  {t('hero.title')}
                </h3>
                <p className="text-sm text-muted-foreground hidden sm:block">
                  Private 4-bedroom villa • Pool • Full kitchen
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Up to 10 guests</span>
              </div>
              <div className="text-primary font-semibold">
                From $120/night
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <ContactDialog variant="contact">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  Ask a Question
                </Button>
              </ContactDialog>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                onClick={() => window.open('https://cal.com/glorynest', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('booking.reserve')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingBar;
