import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import { useTranslation } from "react-i18next";
import { Bed, Bath, Users, UtensilsCrossed, Waves, Home, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactDialog from "@/components/ContactDialog";

const Rooms = () => {
  const { t } = useTranslation();

  const villaFeatures = [
    {
      icon: Bed,
      title: t('rooms.overview.bedrooms'),
      description: t('rooms.overview.bedroomsDesc')
    },
    {
      icon: Waves,
      title: t('rooms.overview.pool'),
      description: t('rooms.overview.poolDesc')
    },
    {
      icon: UtensilsCrossed,
      title: t('rooms.overview.kitchen'),
      description: t('rooms.overview.kitchenDesc')
    },
    {
      icon: Home,
      title: t('rooms.overview.outdoor'),
      description: t('rooms.overview.outdoorDesc')
    },
    {
      icon: MapPin,
      title: t('rooms.overview.location'),
      description: t('rooms.overview.locationDesc')
    }
  ];

  const roomImages = [
    { src: "/rooms/master_bedroom.jpg", title: "Master Bedroom", category: "bedroom" },
    { src: "/rooms/bedroom1.jpg", title: "Bedroom 2", category: "bedroom" },
    { src: "/rooms/bedroom2.jpg", title: "Bedroom 3", category: "bedroom" },
    { src: "/rooms/living_room.jpg", title: "Living Room", category: "common" },
    { src: "/rooms/kitchen.jpg", title: "Full Kitchen", category: "common" },
    { src: "/rooms/bathroom1.jpg", title: "Bathroom 1", category: "bathroom" },
    { src: "/rooms/bathroom2.jpg", title: "Bathroom 2", category: "bathroom" },
    { src: "/rooms/court_yard.jpg", title: "Private Courtyard", category: "outdoor" },
    { src: "/rooms/entrance.jpg", title: "Villa Entrance", category: "outdoor" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StickyBookingBar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src="/rooms/master_bedroom.jpg"
            alt="Glory Nest Villa"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-3xl animate-fade-up">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-semibold text-white">Entire Private Villa</span>
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
                  {t('rooms.title')}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {t('rooms.description')}
                </p>
                <ContactDialog variant="booking">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl">
                    {t('rooms.cta')}
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {t('rooms.overview.title')}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Everything you need for a perfect family getaway or romantic escape
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {villaFeatures.map((feature, index) => (
                  <Card key={index} className="glass-card border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <feature.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-serif text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Villa Gallery
              </h2>
              <p className="text-xl text-muted-foreground">
                Take a visual tour of your home away from home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {roomImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Villa Layout */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                {t('rooms.layout.title')}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="glass-card p-6">
                  <Bed className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-serif font-semibold text-lg mb-1">4</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="glass-card p-6">
                  <Bath className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-serif font-semibold text-lg mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="glass-card p-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-serif font-semibold text-lg mb-1">8-10</div>
                  <div className="text-sm text-muted-foreground">Guests</div>
                </div>
                <div className="glass-card p-6">
                  <Waves className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-serif font-semibold text-lg mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Private Pool</div>
                </div>
              </div>

              <ContactDialog variant="booking">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl">
                  {t('rooms.cta')}
                </Button>
              </ContactDialog>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rooms;
