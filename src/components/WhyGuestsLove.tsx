import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Home, Zap, Users } from "lucide-react";

const WhyGuestsLove = () => {
  const reasons = [
    {
      icon: Home,
      title: "A real home",
      description: "Hosted by Trinh & daughter Aaliyah with warm, unpretentious care that makes you feel like family."
    },
    {
      icon: Heart,
      title: "The nest feeling",
      description: "Quiet corners to read, nap, and just be. Every space designed for comfort and genuine relaxation."
    },
    {
      icon: Zap,
      title: "Easy days",
      description: "Free bicycles, airport transfer support, flexible add-ons – everything flows smoothly."
    },
    {
      icon: Users,
      title: "Belonging",
      description: "Meet neighbors, learn authentic recipes, support local families via our E-Fund initiative."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Why Guests Love Glory Nest
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            It's not just about the beautiful rooms or perfect location – 
            it's about the feeling of being welcomed into a real Vietnamese home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="glass-card p-8 group hover:scale-105 transition-glass animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/story">See All Amenities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyGuestsLove;