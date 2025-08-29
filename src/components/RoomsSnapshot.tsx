import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Bath, Wifi, Coffee } from "lucide-react";

const RoomsSnapshot = () => {
  const rooms = [
    {
      name: "Romantic Nest",
      description: "Cozy retreat with bathtub & soft lighting perfect for couples",
      sleeps: "Sleeps 2",
      price: "3,500,000 VND",
      features: ["Private bathtub", "Soft lighting", "Cozy atmosphere"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Poolside Suite",
      description: "Steps to pool, airy space with tropical garden views",
      sleeps: "Sleeps 2-3",
      price: "4,200,000 VND",
      features: ["Pool access", "Garden view", "Spacious layout"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Family Loft",
      description: "Extra space for little ones with books, toys & family comforts",
      sleeps: "Sleeps 3-4",
      price: "5,000,000 VND",
      features: ["Family-friendly", "Books & toys", "Extra space"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Your Perfect Nest Awaits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each room is designed as a private cocoon – modern comforts with touches of Vietnamese charm. 
            Perfect for families, couples, or solo dreamers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room, index) => (
            <Card 
              key={room.name}
              className="glass-card border-0 overflow-hidden group hover:scale-105 transition-glass animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{room.sleeps}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {room.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {room.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">From</span>
                    <p className="font-semibold text-primary">{room.price}/night</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <Link to="/rooms">View Details</Link>
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <Link to="/rooms">Reserve</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/rooms">View All Rooms & Rates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSnapshot;