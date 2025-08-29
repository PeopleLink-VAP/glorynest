import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Home, Baby, Sparkles } from "lucide-react";
import ContactDialog from "./ContactDialog";
import familyPool from "@/assets/family-pool.jpg";
import honeymoonHoian from "@/assets/honeymoon-hoian.jpg";

const RoomsSnapshot = () => {
  const packages = [
    {
      name: "Family Package",
      description: "Perfect for families with kids - private villa with pool, toys & safe spaces",
      sleeps: "Up to 6 guests",
      price: "3,500,000 VND",
      features: ["Kids toys & books", "Pool safety", "Family meals", "Local adventures"],
      image: familyPool,
      icon: <Baby className="w-6 h-6" />,
      variant: "family" as const
    },
    {
      name: "Honeymoon Package", 
      description: "Romantic villa setup with special touches for your special moment",
      sleeps: "Perfect for 2",
      price: "3,500,000 VND",
      features: ["Romantic setup", "Couples massage", "Private dining", "Sunset tours"],
      image: honeymoonHoian,
      icon: <Heart className="w-6 h-6" />,
      variant: "honeymoon" as const
    }
  ];

  return (
    <section className="py-20 bg-secondary/8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Entire Private Villa</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Rent the entire villa with 2 bedrooms, full kitchen, living room & private pool. 
            Choose between our family-friendly or romantic honeymoon experiences.
          </p>
        </div>

        {/* Villa Features Banner */}
        <div className="glass-card p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Home className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-xl font-semibold">What You Get</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="font-semibold text-primary">2 Bedrooms</div>
              <div className="text-sm text-muted-foreground">Queen & King beds</div>
            </div>
            <div>
              <div className="font-semibold text-primary">Full Kitchen</div>
              <div className="text-sm text-muted-foreground">Cook together</div>
            </div>
            <div>
              <div className="font-semibold text-primary">Private Pool</div>
              <div className="text-sm text-muted-foreground">Just for you</div>
            </div>
            <div>
              <div className="font-semibold text-primary">Living Space</div>
              <div className="text-sm text-muted-foreground">Relax & connect</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 glass-card px-3 py-2 text-white">
                    {pkg.icon}
                    <span className="text-sm font-medium">{pkg.sleeps}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="glass-card px-3 py-2">
                    <div className="text-xs text-white/80">From</div>
                    <div className="font-semibold text-white">{pkg.price}/night</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Sparkles className="w-3 h-3 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <ContactDialog variant={pkg.variant}>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Choose {pkg.name}
                  </Button>
                </ContactDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ContactDialog variant="booking">
            <Button variant="outline" size="lg" className="glass-card">
              Have Questions? Contact Us
            </Button>
          </ContactDialog>
        </div>
      </div>
    </section>
  );
};

export default RoomsSnapshot;