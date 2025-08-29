import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Waves, Home, ChefHat, DollarSign } from "lucide-react";

const AtAGlance = () => {
  const highlights = [
    {
      icon: MapPin,
      label: "Location",
      value: "Walk/cycle to Ancient Town; short ride to An Bang/Cua Dai"
    },
    {
      icon: Home,
      label: "Comforts",
      value: "Private pool, sauna, sunken couch, rooftop terrace"
    },
    {
      icon: Waves,
      label: "Perfect For",
      value: "Couples retreats • family getaways • long weekends"
    },
    {
      icon: ChefHat,
      label: "Meals",
      value: "Home-cooked Vietnamese dishes (kid-friendly on request)"
    },
    {
      icon: DollarSign,
      label: "From",
      value: "3,500,000 VND/night"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            At a Glance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about your stay at Glory Nest – 
            from location to amenities, all designed for your comfort and convenience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.label}
                className="glass-card p-6 flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {highlight.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg border-0" asChild>
                <Link to="/booking">Book Your Stay</Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;