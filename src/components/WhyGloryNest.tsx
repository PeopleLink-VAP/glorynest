import { Home, ChefHat, Users, Heart, Sparkles } from "lucide-react";
import sparrowIcon from "@/assets/sparrow-icon.png";

const WhyGloryNest = () => {
  const features = [
    {
      icon: Home,
      title: "Your Private Sanctuary",
      description: "Complete villa with 2 bedrooms, kitchen, pool & living space - like staying at a dear friend's home"
    },
    {
      icon: ChefHat,
      title: "Authentic Family Meals",
      description: "Grandmother's recipes prepared with love, shared stories over every dish"
    },
    {
      icon: Users,
      title: "Four Generations of Care",
      description: "From grandmother's garden to our family table - women nurturing belonging through generations"
    },
    {
      icon: Heart,
      title: "Stays with Purpose",
      description: "Your stay directly supports local education and single mothers through our E-Fund initiative"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative sparrows */}
      <div className="absolute top-10 left-10 opacity-30">
        <img src={sparrowIcon} alt="" className="w-12 h-12" />
      </div>
      <div className="absolute top-32 right-20 opacity-20">
        <img src={sparrowIcon} alt="" className="w-8 h-8 transform scale-x-[-1]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">What Makes Us Special</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-foreground mb-6">
            Why Glory Nest Feels Like Home
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a place to stay – we're a family home where every guest 
            becomes part of our story, every meal shared creates memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group"
            >
              <div className="glass-card p-8 h-full relative overflow-hidden">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <img src={sparrowIcon} alt="" className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGloryNest;