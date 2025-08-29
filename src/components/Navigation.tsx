import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { href: "/", label: "Home" },
    { href: "/story", label: "Our Story" },
    { href: "/rooms", label: "Rooms & Rates" },
    { href: "/efund", label: "E-Fund" },
    { href: "/journal", label: "Journal" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 transition-glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/efa80ed4-4282-4a43-bc0e-3ecceae9ed54.png" 
              alt="Glory Nest Logo" 
              className="h-12 w-12"
            />
            <span className="font-serif text-2xl font-semibold text-foreground">
              Glory Nest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-smooth hover:text-primary ${
                  isActive(item.href) ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ContactDialog variant="contact">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </ContactDialog>
            <ContactDialog variant="booking">
              <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Book Villa
              </Button>
            </ContactDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-smooth hover:bg-primary/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 transition-smooth hover:text-primary ${
                    isActive(item.href) ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <ContactDialog variant="contact">
                  <Button variant="outline" size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </ContactDialog>
                <ContactDialog variant="booking">
                  <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-primary to-secondary">
                    Book Villa
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;