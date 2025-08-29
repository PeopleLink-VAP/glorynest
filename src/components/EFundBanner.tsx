import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Users } from "lucide-react";

const EFundBanner = () => {
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Stay with Purpose
          </h2>
          
          <p className="text-xl text-primary font-medium mb-8">
            "A portion of every stay supports children's education & single-mom emergencies in Quang Nam."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-6 text-left">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-foreground">Children's Education</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Supporting school supplies, uniforms, and educational opportunities 
                for local children in Quang Nam province.
              </p>
            </div>

            <div className="glass-card p-6 text-left">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-foreground">Family Support</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Emergency assistance for single mothers and families in need, 
                creating a stronger community together.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 max-w-2xl mx-auto mb-8">
            <p className="text-muted-foreground leading-relaxed italic">
              "As a single mom, I know how vital community support is. Glory Nest is our way 
              to care for others while welcoming you into our home. Every booking makes a difference."
            </p>
            <p className="text-primary font-medium mt-4">— Trinh, Founder</p>
          </div>

          <Button variant="default" size="lg" asChild>
            <Link to="/efund">Learn About Our E-Fund</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EFundBanner;