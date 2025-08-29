import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Bike } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Perfect Location
          </h2>
          <p className="text-lg text-primary font-medium mb-8">
            "Between the lantern glow of Ancient Town and the sea breeze of An Bang."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ancient Town</h3>
                  <p className="text-muted-foreground">
                    Walk or cycle through charming streets filled with lanterns, 
                    historic architecture, and authentic local life.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bike className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">An Bang Beach</h3>
                  <p className="text-muted-foreground">
                    Short bike ride to pristine beaches with crystal clear waters 
                    and fresh seafood served right on the sand.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Easy Access</h3>
                  <p className="text-muted-foreground">
                    40-45 minutes from Da Nang Airport. We can arrange transfers 
                    and provide free bicycles for local exploration.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-semibold text-foreground mb-3">Quick Tips</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Airport transfer available upon request</li>
                <li>• Free bicycles provided for all guests</li>
                <li>• Walking distance to night markets & restaurants</li>
                <li>• Easy day trips to My Son Sanctuary & Ba Na Hills</li>
              </ul>
            </div>

            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">How to Get Here</Link>
            </Button>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 aspect-square bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Explore our location and nearby attractions
                  </p>
                  <Button variant="outline" className="mt-4" size="sm">
                    View Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;