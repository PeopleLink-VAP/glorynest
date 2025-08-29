import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sprout, Users, Home } from "lucide-react";

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-xl text-primary font-medium">
                From grandmother's morning glory garden to the nest we share with you
              </p>
            </div>
          </div>
        </section>

        {/* Roots Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-12 mb-16 animate-fade-up">
                <div className="flex items-center space-x-4 mb-8">
                  <Sprout className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">Roots</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This land once held my grandmother's morning glory garden. She believed in nurturing life 
                  even when times were tough. That spirit still grows here – in every corner of Glory Nest, 
                  in every meal we share, and in every guest we welcome as family.
                </p>
              </div>

              {/* Passing Through Generations */}
              <div className="glass-card p-12 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4 mb-8">
                  <Users className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    Passing Through Generations
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My mother carried her strength forward, teaching me that hospitality is about more than 
                  comfort – it's about creating connection. And now, as a single mom, I am building Glory Nest 
                  with my daughter Aaliyah – not just as a villa, but as a home where stories are shared 
                  and memories are made.
                </p>
              </div>

              {/* The Nest Today */}
              <div className="glass-card p-12 mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-4 mb-8">
                  <Home className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    The Nest Today
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Glory Nest is where guests become part of our story: sharing meals, laughter, and local life. 
                  Every corner reflects sustainability, community, and care. From the locally-sourced materials 
                  in our design to the traditional recipes we prepare fresh each morning, authenticity 
                  flows through everything we do.
                </p>
              </div>

              {/* Giving Back */}
              <div className="glass-card p-12 mb-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-4 mb-8">
                  <Heart className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    Giving Back
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With each booking, you're helping us support education and emergency needs for local families. 
                  From grandmother's garden to your getaway nest – Glory Nest is home, for us and for you. 
                  It's our way of ensuring that the spirit of nurturing continues for generations to come.
                </p>
              </div>

              <div className="text-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/rooms">Be Part of Our Story – Book Your Stay</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Story;