import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with glassmorphism overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Hoi An Ancient Town • An Bang Beach</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
            Glorynest
            <br />
            <span className="text-primary">Your Cozy Nest</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal">
              in the Heart of Hoi An
            </span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A boutique villa where comfort meets connection – steps from Ancient Town, 
            moments from the beach.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="min-w-48 h-14 text-lg shadow-lg"
              asChild
            >
              <Link to="/rooms">Book Your Nest</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-48 h-14 text-lg glass-card"
              asChild
            >
              <Link to="/contact">Join Our Waitlist</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <span>From 3,500,000 VND/night</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-primary" />
              <span>Supporting Local Families</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Walk to Ancient Town</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;