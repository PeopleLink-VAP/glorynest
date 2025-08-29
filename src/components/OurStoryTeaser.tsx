import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const OurStoryTeaser = () => {
  return <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-primary font-medium italic">
                    "From grandmother's morning-glory garden to the nest we share with you."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Four generations of women have shaped this land – from my grandmother's 
                    resilient spirit during tough times, to my mother's strength, and now 
                    Aaliyah and I building Glory Nest as more than just accommodation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We're creating a place where guests become part of our story, 
                    where every meal shared and every conversation had adds to the 
                    tapestry of belonging that makes Glory Nest truly special.
                  </p>
                </div>
              </div>

              <Button variant="default" size="lg" className="group" asChild>
                <Link to="/story">
                  Read Our Full Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="glass-card p-8 space-y-6">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/30 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Trinh &amp; David</p>
                    <p className="text-xs opacity-90">Your hosts at Glory Nest</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                    "We believe in nurturing life even when times are tough. 
                    That spirit still grows here, in every corner of Glory Nest, 
                    in every guest we welcome home."
                  </blockquote>
                  <p className="text-primary font-medium text-sm mt-3">— Trinh, Host</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OurStoryTeaser;