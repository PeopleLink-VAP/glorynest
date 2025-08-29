import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Heart, Users, Calendar, Sparkles } from "lucide-react";
import ContactDialog from "./ContactDialog";
import villaHero from "@/assets/villa-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src={villaHero} 
          alt="Glory Nest Villa - Your perfect family getaway in Hoi An"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Floating nest elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-60">
          <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
        </div>
        <div className="absolute top-32 right-16 opacity-40">
          <Heart className="w-6 h-6 text-accent animate-float" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-50">
          <Star className="w-10 h-10 text-primary animate-float" style={{animationDelay: '1s'}} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-up">
          {/* Special Badge */}
          <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 text-sm font-medium">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground">Entire Private Villa • Family & Honeymoon Packages</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          {/* Creative Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Glory
              <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Nest
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90">
              Your Perfect Family Escape in Hoi An
            </p>
          </div>

          {/* Compelling Subline */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Entire private villa with 2 bedrooms, full kitchen, pool & living space. 
            <br className="hidden md:block" />
            Perfect for families with kids or romantic honeymoon getaways!
          </p>

          {/* Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Family Package</h3>
              <p className="text-sm text-muted-foreground">Pool, toys, kid-friendly meals & local adventures</p>
            </div>
            <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Honeymoon Package</h3>
              <p className="text-sm text-muted-foreground">Romantic setup, couples' experiences & privacy</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ContactDialog variant="booking">
              <Button 
                size="lg" 
                className="min-w-56 h-16 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Entire Villa
              </Button>
            </ContactDialog>
            
            <ContactDialog variant="family">
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-56 h-16 text-lg font-semibold glass-card text-foreground border-white/30 hover:bg-white/10"
              >
                <Users className="w-5 h-5 mr-2" />
                Family Package
              </Button>
            </ContactDialog>
          </div>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-6 text-white/90">
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">3.5M VND/night</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">E-Fund Impact</span>
            </div>
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Walk to Town</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;