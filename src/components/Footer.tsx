import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/efa80ed4-4282-4a43-bc0e-3ecceae9ed54.png" 
                alt="Glory Nest Logo" 
                className="h-10 w-10"
              />
              <span className="font-serif text-xl font-semibold">Glory Nest</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A boutique villa where comfort meets connection – steps from Ancient Town, 
              moments from the beach.
            </p>
            <div className="flex items-center space-x-1 text-sm text-primary">
              <Heart className="w-4 h-4" />
              <span>Supporting local families through our E-Fund</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/booking" className="text-muted-foreground hover:text-primary transition-smooth">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-muted-foreground hover:text-primary transition-smooth">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/efund" className="text-muted-foreground hover:text-primary transition-smooth">
                  E-Fund Initiative
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-muted-foreground hover:text-primary transition-smooth">
                  Travel Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+84 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@glorynest.vn</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Near Ancient Town<br />
                  Hoi An, Quang Nam, Vietnam
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Ready to make Glory Nest your home away from home?
            </p>
            <div className="space-y-3">
              <Button className="w-full h-12 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold shadow-xl border-0 transition-all duration-300 hover:scale-105" asChild>
                <Link to="/booking">Book Your Stay</Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Glory Nest. All rights reserved. Built with love in Hoi An.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          size="lg" 
          className="h-14 px-8 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold shadow-2xl border-0 animate-float transition-all duration-300 hover:scale-105"
          asChild
        >
          <Link to="/booking">
            Book Now
          </Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;