import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Users, Heart, MessageCircle } from "lucide-react";

interface ContactDialogProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  variant?: "booking" | "contact" | "family" | "honeymoon";
}

const ContactDialog = ({ 
  children, 
  title = "Contact Glory Nest",
  description = "Let's plan your perfect Hoi An getaway!",
  variant = "contact"
}: ContactDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getVariantConfig = () => {
    switch (variant) {
      case "booking":
        return {
          title: "Book Your Villa",
          description: "Reserve your private villa in the heart of Hoi An",
          icon: <Calendar className="w-6 h-6 text-primary" />,
          placeholder: "Tell us about your dates, family size, and any special requests..."
        };
      case "family":
        return {
          title: "Family Package Inquiry",
          description: "Perfect for families with kids - villa with pool, toys & local experiences",
          icon: <Users className="w-6 h-6 text-primary" />,
          placeholder: "How many family members? Ages of children? Any specific needs..."
        };
      case "honeymoon":
        return {
          title: "Honeymoon Package Inquiry", 
          description: "Romantic villa with special touches for your special moment",
          icon: <Heart className="w-6 h-6 text-primary" />,
          placeholder: "Tell us about your dream honeymoon experience in Hoi An..."
        };
      default:
        return {
          title,
          description,
          icon: <MessageCircle className="w-6 h-6 text-primary" />,
          placeholder: "How can we help make your Hoi An experience magical..."
        };
    }
  };

  const config = getVariantConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    alert("Thank you for your inquiry! We'll get back to you within 2 hours.");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg glass-card border-0 backdrop-blur-xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            {config.icon}
          </div>
          <DialogTitle className="font-serif text-2xl text-foreground">
            {config.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {config.description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input 
                id="firstName" 
                required 
                placeholder="Your name"
                className="bg-background/50"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Family name"
                className="bg-background/50"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="your@email.com"
              className="bg-background/50"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">WhatsApp/Phone</Label>
            <Input 
              id="phone" 
              placeholder="+84 XXX XXX XXX"
              className="bg-background/50"
            />
          </div>
          
          {variant === "booking" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkin">Check-in</Label>
                <Input 
                  id="checkin" 
                  type="date"
                  className="bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="checkout">Check-out</Label>
                <Input 
                  id="checkout" 
                  type="date"
                  className="bg-background/50"
                />
              </div>
            </div>
          )}
          
          <div>
            <Label htmlFor="guests">Family Size/Guests</Label>
            <Input 
              id="guests" 
              placeholder="2 adults, 1 child"
              className="bg-background/50"
            />
          </div>
          
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder={config.placeholder}
              rows={4}
              className="bg-background/50 resize-none"
            />
          </div>
          
          <div className="flex gap-3">
            <Button 
              type="button"
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              variant="default" 
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;