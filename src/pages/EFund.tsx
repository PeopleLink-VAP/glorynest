import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Users, HandHeart } from "lucide-react";

const EFund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                The E-Fund Initiative
              </h1>
              <p className="text-xl text-primary font-medium">
                At Glory Nest, staying here means giving back
              </p>
            </div>
          </div>
        </section>

        {/* What We Support */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Where Your Stay Makes a Difference
                </h2>
                <p className="text-lg text-muted-foreground">
                  A portion of every booking goes directly to supporting local families and children in Quang Nam province.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="glass-card p-8 animate-fade-up">
                  <div className="flex items-center space-x-4 mb-6">
                    <GraduationCap className="w-12 h-12 text-primary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Children's Education
                    </h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• School supplies and uniforms for children in need</li>
                    <li>• Educational materials and books for local schools</li>
                    <li>• Scholarship support for continuing education</li>
                    <li>• After-school programs and tutoring assistance</li>
                  </ul>
                </div>

                <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <Users className="w-12 h-12 text-primary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Family Support
                    </h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Emergency assistance for single mothers</li>
                    <li>• Healthcare support for families in crisis</li>
                    <li>• Job training and skill development programs</li>
                    <li>• Community building and support networks</li>
                  </ul>
                </div>
              </div>

              {/* Personal Note */}
              <div className="glass-card p-12 text-center mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <HandHeart className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  A Personal Note from Trinh
                </h3>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                  "As a single mom, I know how vital community support is. There were times when a helping hand 
                  made all the difference for Aaliyah and me. Glory Nest is our way to care for others while 
                  welcoming you into our home. Every booking makes a real difference in someone's life."
                </blockquote>
                <p className="text-primary font-medium">— Trinh, Founder & Host</p>
              </div>

              {/* How It Works */}
              <div className="text-center mb-16">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
                  How It Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="animate-fade-up">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-primary text-xl">1</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">You Book</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose your perfect room at Glory Nest for your Hoi An adventure
                    </p>
                  </div>
                  <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-primary text-xl">2</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">We Give</h4>
                    <p className="text-sm text-muted-foreground">
                      A portion of your stay automatically goes to our E-Fund
                    </p>
                  </div>
                  <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-primary text-xl">3</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Lives Change</h4>
                    <p className="text-sm text-muted-foreground">
                      Local families receive direct support for education and emergencies
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold shadow-xl border-0 transition-all duration-300 hover:scale-105" asChild>
                    <Link to="/booking">Stay With Purpose – Book Now</Link>
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

export default EFund;