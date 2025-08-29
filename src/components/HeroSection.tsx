import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Heart, Users, Calendar, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import ContactDialog from "./ContactDialog";
import villaHero from "@/assets/villa-hero.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src={villaHero} 
          alt="Glory Nest Villa - Your perfect family getaway in Hoi An"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Special Badge */}
          <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 text-sm font-medium">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground">{t('hero.specialBadge')}</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          {/* Creative Headline */}
          <div className="space-y-6">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-normal text-white leading-tight tracking-wide">
              Glory Nest
            </h1>
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Compelling Subline */}
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>


          {/* CTA Button */}
          <div className="flex justify-center">
            <ContactDialog variant="booking">
              <Button 
              size="lg" 
              className="min-w-72 h-20 text-xl font-semibold bg-primary hover:bg-primary/90 shadow-xl text-black border-0"
              >
                <Calendar className="w-6 h-6 mr-3" />
                {t('hero.bookNow')}
              </Button>
            </ContactDialog>
          </div>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-secondary/40">
                  <Star className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">3.5M VND</div>
                  <div className="text-xs text-gray-700">{t('hero.pricePerNight')}</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/40">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{t('hero.efundLabel')}</div>
                  <div className="text-xs text-gray-700">{t('hero.impactStay')}</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl hover:scale-105 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/40">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{t('hero.walkTo')}</div>
                  <div className="text-xs text-gray-700">{t('hero.oldTown')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;