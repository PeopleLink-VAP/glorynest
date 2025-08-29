import { Button } from "@/components/ui/button";
import { Calendar, Users, Home, Sparkles } from "lucide-react";
import ContactDialog from "./ContactDialog";
import sparrowIcon from "@/assets/sparrow-icon.png";

const BookingSection = () => {
  return (
    <section className="py-20 bg-primary/3 relative overflow-hidden">
      {/* Decorative sparrows */}
      <div className="absolute top-16 left-12 opacity-25">
        <img src={sparrowIcon} alt="" className="w-10 h-10" />
      </div>
      <div className="absolute bottom-20 right-16 opacity-20">
        <img src={sparrowIcon} alt="" className="w-8 h-8 transform scale-x-[-1]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass-card-luxury px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Ready to Experience Glory Nest?</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-normal text-foreground mb-6">
              Book Your Private Villa Sanctuary
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete privacy in our 2-bedroom villa with kitchen, pool, and living space. 
              Perfect for families seeking authentic experiences or couples on romantic getaways.
            </p>
          </div>

          {/* Villa Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card-luxury p-8 text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-foreground mb-2">Entire Private Villa</h3>
              <p className="font-sans text-muted-foreground text-sm">2 bedrooms, full kitchen, living room & private pool</p>
            </div>
            
            <div className="glass-card-luxury p-8 text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-foreground mb-2">Perfect for Families</h3>
              <p className="font-sans text-muted-foreground text-sm">Up to 6 guests, kid-friendly amenities included</p>
            </div>
            
            <div className="glass-card-luxury p-8 text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-foreground mb-2">3.5M VND/Night</h3>
              <p className="font-sans text-muted-foreground text-sm">Includes breakfast, pool access & E-Fund contribution</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center space-y-8">
            <div className="glass-card-luxury p-10 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <img src={sparrowIcon} alt="" className="w-8 h-8" />
              </div>
              
              <h3 className="font-display text-3xl font-normal text-foreground mb-4">
                Ready to Come Home to Glory Nest?
              </h3>
              <p className="font-sans text-muted-foreground mb-6">
                Tell us about your dates and family size. We'll create a personalized experience 
                that feels like visiting dear friends in Vietnam.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactDialog variant="booking">
                  <Button 
                    size="lg" 
                    className="min-w-48 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl text-primary-foreground border-0"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Now
                  </Button>
                </ContactDialog>
                
                <ContactDialog variant="contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="min-w-48 h-16 text-lg font-bold glass-card-luxury border-2 border-primary/40 hover:bg-primary/10 text-foreground hover:text-primary"
                  >
                    Ask Questions
                  </Button>
                </ContactDialog>
              </div>
            </div>
            
            <p className="font-sans text-sm text-muted-foreground">
              🌿 Every stay supports local education through our E-Fund initiative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;