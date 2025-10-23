import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import { useTranslation } from "react-i18next";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Heart, Sprout, Users, Home } from "lucide-react";

const Story = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StickyBookingBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute top-10 right-10 opacity-20">
            <img src="/logo/PNG/glorynest_submark_terracotta.png" alt="" className="w-16 h-16 animate-float" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                {t('story.title')}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {t('story.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('story.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Roots Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-12 mb-16 animate-fade-up">
                <div className="flex items-center space-x-4 mb-8">
                  <Sprout className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">{t('story.roots.title')}</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('story.roots.content')}
                </p>
              </div>

              {/* Passing Through Generations */}
              <div className="glass-card p-12 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4 mb-8">
                  <Users className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    {t('story.generations.title')}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('story.generations.content')}
                </p>
              </div>

              {/* The Nest Today */}
              <div className="glass-card p-12 mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-4 mb-8">
                  <Home className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    {t('story.today.title')}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('story.today.content')}
                </p>
              </div>

              {/* Giving Back */}
              <div className="glass-card p-12 mb-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-4 mb-8">
                  <Heart className="w-12 h-12 text-primary" />
                  <h2 className="font-serif text-3xl font-semibold text-foreground">
                    {t('story.giving.title')}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('story.giving.content')}
                </p>
              </div>

              <div className="text-center">
                <ContactDialog variant="booking">
                  <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg border-0 transition-all duration-300 hover:scale-105">
                    {t('story.cta')}
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Story;