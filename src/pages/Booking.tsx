import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Calendar as CalendarIcon, Users, MapPin, Heart, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import ContactDialog from "@/components/ContactDialog";
import { getSparrowIcon } from "@/lib/sparrowUtils";

const Booking = () => {
  const sparrowIcon1 = getSparrowIcon();
  const sparrowIcon2 = getSparrowIcon();
  const [selectedDates, setSelectedDates] = useState({ checkin: "", checkout: "" });
  const [guests, setGuests] = useState({ adults: 2, children: 0 });

  // Sample blocked dates and special pricing
  const blockedDates = [
    "2024-12-25", "2024-12-26", "2024-12-31", "2025-01-01",
    "2025-02-10", "2025-02-11", "2025-02-12" // Tet Holiday
  ];

  const specialRates = [
    { dates: "Dec 20-30, 2024", rate: "4.5M VND", reason: "Holiday Season" },
    { dates: "Feb 8-15, 2025", rate: "5.0M VND", reason: "Tet Festival" },
    { dates: "Apr 25-30, 2025", rate: "4.0M VND", reason: "Liberation Day" }
  ];

  const calculateNights = () => {
    if (!selectedDates.checkin || !selectedDates.checkout) return 0;
    const start = new Date(selectedDates.checkin);
    const end = new Date(selectedDates.checkout);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getBaseRate = () => {
    const nights = calculateNights();
    if (nights === 0) return 0;
    
    // Check for special rates (simplified logic)
    const checkinDate = new Date(selectedDates.checkin);
    const month = checkinDate.getMonth();
    const day = checkinDate.getDate();
    
    if ((month === 11 && day >= 20) || month === 0) return 4500000; // Holiday season
    if (month === 1 && day >= 8 && day <= 15) return 5000000; // Tet
    if (month === 3 && day >= 25) return 4000000; // Liberation Day
    
    return 3500000; // Base rate
  };

  const totalCost = () => {
    const nights = calculateNights();
    const rate = getBaseRate();
    return nights * rate;
  };

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute top-10 left-10 opacity-30">
            <img src={sparrowIcon1} alt="" className="w-12 h-12" />
          </div>
          <div className="absolute bottom-16 right-12 opacity-20">
            <img src={sparrowIcon2} alt="" className="w-10 h-10 transform scale-x-[-1]" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center space-x-2 glass-card-luxury px-6 py-3 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Reserve Your Villa</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                Book Glory Nest Villa
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your private 2-bedroom sanctuary with pool, kitchen & authentic Vietnamese experiences
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  10 min walk to Hoi An Old Town
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  Perfect for families & couples
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  E-Fund Impact Stay
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 -mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card-luxury border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Plan Your Stay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkin">Check-in Date</Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={selectedDates.checkin}
                        onChange={(e) => setSelectedDates(prev => ({ ...prev, checkin: e.target.value }))}
                        className="mt-2"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout">Check-out Date</Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={selectedDates.checkout}
                        onChange={(e) => setSelectedDates(prev => ({ ...prev, checkout: e.target.value }))}
                        className="mt-2"
                        min={selectedDates.checkin || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="adults">Adults</Label>
                      <Input
                        id="adults"
                        type="number"
                        min="1"
                        max="4"
                        value={guests.adults}
                        onChange={(e) => setGuests(prev => ({ ...prev, adults: parseInt(e.target.value) || 1 }))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="children">Children</Label>
                      <Input
                        id="children"
                        type="number"
                        min="0"
                        max="4"
                        value={guests.children}
                        onChange={(e) => setGuests(prev => ({ ...prev, children: parseInt(e.target.value) || 0 }))}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="requests">Special Requests or Preferences</Label>
                    <Textarea
                      id="requests"
                      placeholder="Tell us about dietary restrictions, celebration occasions, accessibility needs, or any special touches you'd like..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  {/* Package Preferences */}
                  <div>
                    <Label>Experience Preferences</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      <div className="glass-card p-4 hover:bg-primary/5 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Family Experience</div>
                            <div className="text-sm text-muted-foreground">Kid activities, family meals</div>
                          </div>
                        </div>
                      </div>
                      <div className="glass-card p-4 hover:bg-accent/5 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <Heart className="w-5 h-5 text-accent" />
                          <div>
                            <div className="font-medium">Romantic Getaway</div>
                            <div className="text-sm text-muted-foreground">Couples activities, romantic setup</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button
                    className="w-full h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl text-primary-foreground border-0 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://cal.com/glorynest', '_blank')}
                  >
                    <CalendarIcon className="w-6 h-6 mr-3" />
                    Book on Cal.com
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Price Summary */}
              {calculateNights() > 0 && (
                <Card className="glass-card-luxury border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>{formatVND(getBaseRate())}/night</span>
                      <span>×{calculateNights()} nights</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span>{guests.adults + guests.children} total</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span className="text-primary">{formatVND(totalCost())}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>✓ Includes breakfast daily</p>
                      <p>✓ Private pool & villa access</p>
                      <p>✓ E-Fund contribution included</p>
                      <p>✓ Airport pickup available (+fee)</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Special Rates */}
              <Card className="glass-card-luxury border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Special Rates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {specialRates.map((rate, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-3">
                        <div className="font-medium text-sm">{rate.dates}</div>
                        <div className="text-primary font-semibold">{rate.rate}/night</div>
                        <div className="text-xs text-muted-foreground">{rate.reason}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Blocked Dates Notice */}
              <Card className="glass-card-luxury border-0 border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Important Dates</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Some dates are unavailable due to holidays or prior bookings.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>• Holiday seasons have premium rates</p>
                    <p>• Tet Festival (Feb 8-15) is our peak season</p>
                    <p>• Contact us for last-minute availability</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="glass-card-luxury border-0">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Need Help?</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      Our family is here to help you plan the perfect stay.
                    </p>
                    <ContactDialog variant="contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Chat with Trinh & David
                      </Button>
                    </ContactDialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;