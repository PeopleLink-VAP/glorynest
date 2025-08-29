import { Home, MapPin, ChefHat, Users, Heart } from "lucide-react";

const WhyGloryNest = () => {
  const features = [
    {
      icon: Home,
      title: "A true nest",
      description: "Warm, personal, built for rest and genuine connection"
    },
    {
      icon: MapPin,
      title: "Perfect location",
      description: "Walk or cycle to Hoi An's Ancient Town & An Bang Beach"
    },
    {
      icon: ChefHat,
      title: "Home-cooked meals",
      description: "Authentic Vietnamese dishes rooted in family tradition"
    },
    {
      icon: Users,
      title: "Four generations",
      description: "Women shaping a house of belonging and stories"
    },
    {
      icon: Heart,
      title: "Purpose-driven stays",
      description: "Every stay supports local education & single moms through our E-Fund"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Why Glory Nest?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than accommodation – it's a home where every corner tells a story, 
            every meal connects cultures, and every stay makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-8 group hover:scale-105 transition-glass animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGloryNest;