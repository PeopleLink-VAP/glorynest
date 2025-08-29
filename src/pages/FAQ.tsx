import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Location & Transportation",
      faqs: [
        {
          question: "How far is Glory Nest from Da Nang Airport?",
          answer: "Glory Nest is approximately 40-45 minutes from Da Nang Airport by car. We can arrange airport transfers for your convenience – just let us know when you book."
        },
        {
          question: "How do I get to Hoi An Ancient Town from Glory Nest?",
          answer: "You can walk or cycle to the Ancient Town – it's very close! We provide free bicycles for all guests, or it's a pleasant 10-15 minute walk through local neighborhoods."
        },
        {
          question: "Is An Bang Beach accessible from Glory Nest?",
          answer: "Yes! An Bang Beach is just a short bike ride or drive away. We recommend cycling – it's about 15-20 minutes through beautiful countryside and you'll pass local farms and villages."
        }
      ]
    },
    {
      title: "Family & Children",
      faqs: [
        {
          question: "Is Glory Nest suitable for families with children?",
          answer: "Absolutely! Our Family Loft is specifically designed for families, complete with books, toys, and a safe layout. The pool area is also perfect for children, and we can prepare kid-friendly Vietnamese meals."
        },
        {
          question: "Do you provide baby equipment?",
          answer: "We can provide basic baby equipment like high chairs and cribs upon request. Please let us know your needs when booking so we can prepare accordingly."
        },
        {
          question: "Are there child-friendly activities nearby?",
          answer: "Yes! Hoi An offers lantern-making workshops, boat rides, cycling tours, and the nearby beach. We can recommend age-appropriate activities and help arrange family-friendly tours."
        }
      ]
    },
    {
      title: "Couples & Honeymoons",
      faqs: [
        {
          question: "What makes Glory Nest special for honeymooners?",
          answer: "Our Romantic Nest features intimate touches like a private bathtub, cozy sunken couch, and soft lighting. Plus, you'll enjoy rooftop sunsets, our private sauna, and we can arrange special romantic setups."
        },
        {
          question: "Can you arrange romantic dinners?",
          answer: "Yes! We can prepare intimate dinners with traditional Vietnamese dishes, set up private dining areas, and create romantic atmospheres with candles and local flowers."
        }
      ]
    },
    {
      title: "Food & Dining",
      faqs: [
        {
          question: "What food options are available?",
          answer: "We serve authentic home-cooked Vietnamese meals made with fresh local ingredients. We're happy to accommodate vegetarian diets and can prepare kid-friendly versions of our dishes upon request."
        },
        {
          question: "Can you accommodate dietary restrictions?",
          answer: "Absolutely! Please inform us of any dietary restrictions, allergies, or preferences when booking. We can adapt our traditional recipes to meet various dietary needs including vegetarian, vegan, and gluten-free options."
        }
      ]
    },
    {
      title: "Booking & Policies",
      faqs: [
        {
          question: "What is your cancellation policy?",
          answer: "We understand that travel plans can change. Please contact us directly to discuss our flexible cancellation policy, which varies depending on the season and length of stay."
        },
        {
          question: "How do I make a reservation?",
          answer: "You can contact us directly through WhatsApp, email, or our contact form. We'll respond quickly to check availability and confirm your booking details."
        },
        {
          question: "Do you require a deposit?",
          answer: "Yes, we typically require a deposit to secure your booking. The amount varies by season and length of stay. We'll provide full details when you make your reservation."
        }
      ]
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know for a perfect stay at Glory Nest. 
                Can't find what you're looking for? We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div 
                  key={category.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <div className="glass-card p-8">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="glass-card p-8 max-w-2xl mx-auto mt-16 text-center">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're here to help make your stay perfect. Reach out to us directly 
                and we'll answer any questions you have about Glory Nest or Hoi An.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" className="h-12 px-6 border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 font-bold transition-all duration-300 hover:scale-105" asChild>
                    <Link to="/booking">Book Your Stay</Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;