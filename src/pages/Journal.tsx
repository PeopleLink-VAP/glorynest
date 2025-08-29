import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const Journal = () => {
  const blogPosts = [
    {
      title: "Honeymooning in Hoi An: Why a boutique villa beats a hotel",
      excerpt: "Discover the intimate charm of staying in a family-run villa versus traditional hotels, and why couples are choosing personal connections over corporate hospitality.",
      author: "Trinh",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Hidden Flavors of Hoi An: Beyond the Famous Dishes",
      excerpt: "Venture beyond cao lau and white rose dumplings to discover the secret family recipes and street food gems that locals treasure.",
      author: "Aaliyah",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Top 5 Kid-Friendly Spots in Hoi An & Da Nang",
      excerpt: "From hands-on lantern making to beach adventures, discover the best family activities that will keep children engaged while parents relax.",
      author: "Trinh",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Why Staying in a Family-Run Villa Creates Deeper Memories",
      excerpt: "The difference between being a guest and being welcomed home – how personal connections transform travel from sightseeing to storytelling.",
      author: "Trinh",
      date: "February 28, 2024",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Travel Journal
              </h1>
              <p className="text-xl text-muted-foreground">
                Stories, tips, and insights from our hosts and guests about experiencing 
                the authentic heart of Hoi An and Vietnamese culture.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.title}
                  className="glass-card border-0 overflow-hidden group hover:scale-105 transition-glass animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[16/10] bg-primary/15 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/25"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm opacity-90">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <Button variant="outline" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="glass-card p-8 max-w-2xl mx-auto mt-16 text-center">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                More Stories Coming Soon
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're constantly adding new insights, local tips, and guest stories to help you 
                make the most of your time in Hoi An. Subscribe to stay updated!
              </p>
              <Button variant="default" asChild>
                <Link to="/contact">Stay in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;