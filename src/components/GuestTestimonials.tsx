import { Star } from "lucide-react";

const GuestTestimonials = () => {
  const testimonials = [
    {
      quote: "Glory Nest isn't just accommodation – it's a home away from home. Trinh and Aaliyah made us feel like family from the moment we arrived.",
      author: "Sarah & Michael",
      location: "Australia",
      rating: 5
    },
    {
      quote: "The authentic Vietnamese breakfast by the pool, the cozy reading nooks, and the genuine warmth of our hosts made this the most memorable stay in Vietnam.",
      author: "Jennifer Chen",
      location: "Singapore",
      rating: 5
    },
    {
      quote: "Our kids loved the family loft with books and toys, while we enjoyed the sauna and rooftop sunsets. Perfect for families seeking something special.",
      author: "The Anderson Family",
      location: "United States",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Guest Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nothing speaks louder than the experiences of our guests who have 
            found their home away from home at Glory Nest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="glass-card p-8 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-primary/10 pt-4">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-primary text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass-card p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Average rating from Google & Booking.com
          </p>
          <p className="text-xs text-primary mt-2">Coming soon: More reviews</p>
        </div>
      </div>
    </section>
  );
};

export default GuestTestimonials;