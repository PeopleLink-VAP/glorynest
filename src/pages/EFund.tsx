import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import { useTranslation } from "react-i18next";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Users, HandHeart, AlertCircle } from "lucide-react";

const EFund = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StickyBookingBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute bottom-10 left-10 opacity-20">
            <img src="/logo/PNG/glorynest_submark_terracotta.png" alt="" className="w-16 h-16 animate-float" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-primary fill-primary" />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
                {t('efund.title')}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {t('efund.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('efund.description')}
              </p>
            </div>
          </div>
        </section>

        {/* What We Support */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  {t('efund.impact.title')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('efund.impactNote')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="glass-card p-8 animate-fade-up">
                  <div className="flex items-center space-x-4 mb-6">
                    <GraduationCap className="w-12 h-12 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {t('efund.impact.education')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('efund.impact.educationDesc')}
                  </p>
                </div>

                <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <AlertCircle className="w-12 h-12 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {t('efund.impact.emergency')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('efund.impact.emergencyDesc')}
                  </p>
                </div>

                <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <Users className="w-12 h-12 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {t('efund.impact.community')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('efund.impact.communityDesc')}
                  </p>
                </div>
              </div>

              {/* Personal Note */}
              <div className="glass-card p-12 text-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <HandHeart className="w-16 h-16 text-primary mx-auto mb-6" />
                <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
                  "{t('efund.mission')}"
                </blockquote>
              </div>

              {/* How It Works */}
              <div className="text-center mb-16">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
                  How It Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="animate-fade-up">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-primary text-xl">1</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">You Book</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose your perfect room at Glory Nest for your Hoi An adventure
                    </p>
                  </div>
                  <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-primary text-xl">2</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">We Give</h4>
                    <p className="text-sm text-muted-foreground">
                      A portion of your stay automatically goes to our E-Fund
                    </p>
                  </div>
                  <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-primary text-xl">3</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Lives Change</h4>
                    <p className="text-sm text-muted-foreground">
                      Local families receive direct support for education and emergencies
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <ContactDialog variant="booking">
                  <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg border-0 transition-all duration-300 hover:scale-105">
                    {t('efund.cta')}
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

export default EFund;