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
import { Calendar, Users, Heart, MessageCircle, Sparkles } from "lucide-react";

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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    adults: 2,
    children: 0,
    message: '',
    experienceType: ''
  });

  const getVariantConfig = () => {
    switch (variant) {
      case "booking":
        return {
          title: "Book Your Villa",
          description: "Reserve your private 2-bedroom sanctuary with pool & authentic experiences",
          icon: <Calendar className="w-6 h-6 text-white" />,
          placeholder: "Tell us about dietary restrictions, celebration occasions, accessibility needs, or any special touches you'd like..."
        };
      case "family":
        return {
          title: "Family Package Inquiry",
          description: "Perfect for families with kids - villa with pool, toys & local experiences",
          icon: <Users className="w-6 h-6 text-white" />,
          placeholder: "How many family members? Ages of children? Any specific needs..."
        };
      case "honeymoon":
        return {
          title: "Honeymoon Package Inquiry", 
          description: "Romantic villa with special touches for your special moment",
          icon: <Heart className="w-6 h-6 text-white" />,
          placeholder: "Tell us about your dream honeymoon experience in Hoi An..."
        };
      default:
        return {
          title,
          description,
          icon: <MessageCircle className="w-6 h-6 text-white" />,
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

  const calculateNights = () => {
    if (!formData.checkin || !formData.checkout) return 0;
    const start = new Date(formData.checkin);
    const end = new Date(formData.checkout);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl glass-card border-0 backdrop-blur-2xl bg-background/95 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
            {config.icon}
          </div>
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Glory Nest Villa</span>
          </div>
          <DialogTitle className="font-display text-3xl font-normal text-foreground">
            {config.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-lg">
            {config.description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
              <Input 
                id="firstName" 
                required 
                placeholder="Your name"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Family name"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-foreground font-medium">WhatsApp/Phone</Label>
            <Input 
              id="phone" 
              placeholder="+84 XXX XXX XXX"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
            />
          </div>
          
          {variant === "booking" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkin" className="text-foreground font-medium">Check-in Date</Label>
                  <Input 
                    id="checkin" 
                    type="date"
                    value={formData.checkin}
                    onChange={(e) => setFormData(prev => ({ ...prev, checkin: e.target.value }))}
                    min={new Date().toISOString().split('T')[0]}
                    className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="checkout" className="text-foreground font-medium">Check-out Date</Label>
                  <Input 
                    id="checkout" 
                    type="date"
                    value={formData.checkout}
                    onChange={(e) => setFormData(prev => ({ ...prev, checkout: e.target.value }))}
                    min={formData.checkin || new Date().toISOString().split('T')[0]}
                    className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults" className="text-foreground font-medium">Adults</Label>
                  <Input 
                    id="adults" 
                    type="number"
                    min="1"
                    max="4"
                    value={formData.adults}
                    onChange={(e) => setFormData(prev => ({ ...prev, adults: parseInt(e.target.value) || 1 }))}
                    className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="children" className="text-foreground font-medium">Children</Label>
                  <Input 
                    id="children" 
                    type="number"
                    min="0"
                    max="4"
                    value={formData.children}
                    onChange={(e) => setFormData(prev => ({ ...prev, children: parseInt(e.target.value) || 0 }))}
                    className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
                  />
                </div>
              </div>
              
              {calculateNights() > 0 && (
                <div className="glass-card p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">3.5M VND/night × {calculateNights()} nights</span>
                    <span className="font-semibold text-primary">{formatVND(calculateNights() * 3500000)}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ✓ Includes breakfast, pool access & E-Fund contribution
                  </div>
                </div>
              )}
              
              <div>
                <Label className="text-foreground font-medium">Experience Preferences</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <div 
                    className={`glass-card p-4 hover:bg-primary/10 transition-all cursor-pointer border-2 ${
                      formData.experienceType === 'family' ? 'border-primary/40 bg-primary/5' : 'border-primary/20'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, experienceType: prev.experienceType === 'family' ? '' : 'family' }))}
                  >
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Family Experience</div>
                        <div className="text-sm text-muted-foreground">Kid activities, family meals</div>
                      </div>
                    </div>
                  </div>
                  <div 
                    className={`glass-card p-4 hover:bg-accent/10 transition-all cursor-pointer border-2 ${
                      formData.experienceType === 'romantic' ? 'border-accent/40 bg-accent/5' : 'border-primary/20'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, experienceType: prev.experienceType === 'romantic' ? '' : 'romantic' }))}
                  >
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium text-foreground">Romantic Getaway</div>
                        <div className="text-sm text-muted-foreground">Couples activities, romantic setup</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {variant !== "booking" && (
            <div>
              <Label htmlFor="guests" className="text-foreground font-medium">Family Size/Guests</Label>
              <Input 
                id="guests" 
                placeholder="2 adults, 1 child"
                className="bg-background/70 border-primary/20 focus:border-primary/40 mt-2 h-12"
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="message" className="text-foreground font-medium">
              {variant === 'booking' ? 'Special Requests or Preferences' : 'Message'}
            </Label>
            <Textarea 
              id="message" 
              placeholder={config.placeholder}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="bg-background/70 border-primary/20 focus:border-primary/40 resize-none mt-2"
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button 
              type="button"
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1 h-12 border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 font-semibold"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 h-12 text-lg font-semibold bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-xl text-white"
              disabled={variant === 'booking' && (!formData.checkin || !formData.checkout || calculateNights() === 0)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              {variant === 'booking' ? 'Request Booking' : 'Send Message'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;