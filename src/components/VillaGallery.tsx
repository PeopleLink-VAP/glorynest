import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VillaGallery = () => {
  const galleryImages = [
    { src: "/rooms/master_bedroom.jpg", title: "Master Bedroom" },
    { src: "/rooms/living_room.jpg", title: "Living Room" },
    { src: "/rooms/court_yard.jpg", title: "Private Courtyard" },
    { src: "/rooms/kitchen.jpg", title: "Full Kitchen" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Private Villa Awaits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the spaces that will become your home in Hoi An
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/rooms">
              View Full Villa Tour
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VillaGallery;
