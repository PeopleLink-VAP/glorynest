import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock, Plane } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                We'd love to welcome you to our nest. 
                From our family to yours, see you soon at Glory Nest.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-up">
                <div className="glass-card p-8">
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" placeholder="+84 XXX XXX XXX" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkin">Check-in Date</Label>
                        <Input id="checkin" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="checkout">Check-out Date</Label>
                        <Input id="checkout" type="date" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input id="guests" placeholder="2 adults, 1 child" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your travel plans, special requests, or any questions you have..."
                        rows={4}
                      />
                    </div>
                    
                    <Button variant="default" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                {/* Quick Contact */}
                <div className="glass-card p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Get in Touch Quickly
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MessageCircle className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">+84 XXX XXX XXX</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">hello@glorynest.vn</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+84 XXX XXX XXX</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-card p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Find Us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Glory Nest</p>
                        <p className="text-sm text-muted-foreground">
                          Near Ancient Town<br />
                          Hoi An, Quang Nam<br />
                          Vietnam
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    View on Map
                  </Button>
                </div>

                {/* Quick Info */}
                <div className="glass-card p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Good to Know
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Response time: Usually within 2 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Plane className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Airport transfer available upon request</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">WhatsApp is the fastest way to reach us</span>
                    </div>
                  </div>
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

export default Contact;