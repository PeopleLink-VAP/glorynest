import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Bath, Wifi, Coffee, Car, Bike } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      name: "Garden Room",
      description: "Wake up with a view of tropical greens and the gentle sounds of nature.",
      price: "3,500,000 VND",
      features: ["Garden view", "Queen bed", "Private bathroom", "Air conditioning"],
      amenities: [Wifi, Coffee],
      sleeps: 2
    },
    {
      name: "Poolside Suite",
      description: "Steps away from the pool, spacious & serene with direct pool access.",
      price: "4,200,000 VND",
      features: ["Pool access", "King bed", "Sitting area", "Pool view"],
      amenities: [Wifi, Coffee, Bath],
      sleeps: 3
    },
    {
      name: "Family Loft",
      description: "Extra space for kids, with books, toys, and family-friendly amenities.",
      price: "5,000,000 VND",
      features: ["Family space", "Books & toys", "Multiple beds", "Play area"],
      amenities: [Wifi, Coffee, Users],
      sleeps: 4
    },
    {
      name: "Romantic Nest",
      description: "Cozy touches for couples with bathtub, sunken couch, and intimate lighting.",
      price: "4,500,000 VND",
      features: ["Private bathtub", "Sunken couch", "Romantic lighting", "Honeymoon setup"],
      amenities: [Wifi, Coffee, Bath],
      sleeps: 2
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Rooms & Rates
              </h1>
              <p className="text-xl text-muted-foreground">
                At Glory Nest, every room is designed as a private cocoon – modern comforts 
                with touches of Vietnamese charm. Perfect for families, couples, or solo dreamers.
              </p>
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {rooms.map((room, index) => (
                <Card 
                  key={room.name}
                  className="glass-card border-0 overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/40 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Sleeps {room.sleeps}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                        {room.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {room.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.features.map((feature) => (
                          <span 
                            key={feature}
                            className="text-sm text-muted-foreground"
                          >
                            • {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-sm text-muted-foreground">From</span>
                        <p className="font-semibold text-xl text-primary">{room.price}/night</p>
                      </div>
                      <div className="flex space-x-2">
                        {room.amenities.map((Icon, iconIndex) => (
                          <Icon key={iconIndex} className="w-5 h-5 text-primary" />
                        ))}
                      </div>
                    </div>

                    <Button variant="default" className="w-full" size="lg" asChild>
                      <Link to="/contact">Reserve Your Nest</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Bike className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Free Bicycles</p>
                  <p className="text-sm text-muted-foreground">Explore Hoi An</p>
                </div>
                <div className="text-center">
                  <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Airport Transfer</p>
                  <p className="text-sm text-muted-foreground">Available on request</p>
                </div>
                <div className="text-center">
                  <Coffee className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Vietnamese Breakfast</p>
                  <p className="text-sm text-muted-foreground">Fresh & local</p>
                </div>
                <div className="text-center">
                  <Wifi className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">High-Speed WiFi</p>
                  <p className="text-sm text-muted-foreground">Throughout property</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rooms;