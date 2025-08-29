import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How far is Glory Nest from the airport and main attractions?",
      answer: "We're 40-45 minutes from Da Nang Airport. You can walk or bike to Hoi An's Ancient Town, and An Bang Beach is just a short drive or bike ride away. We provide free bicycles and can arrange airport transfers."
    },
    {
      question: "Is Glory Nest kid-friendly?",
      answer: "Absolutely! Our Family Loft comes with books, toys, and a safe layout. We can prepare kid-friendly Vietnamese meals on request, and the pool area is perfect for families."
    },
    {
      question: "What special touches do you offer for honeymooners?",
      answer: "Our Romantic Nest features a private bathtub, cozy atmosphere, and soft lighting. Couples can enjoy the sauna, rooftop sunsets, and our intimate movie nook. We can arrange special romantic setups too."
    },
    {
      question: "What food options are available?",
      answer: "We serve authentic home-cooked Vietnamese meals made with fresh local ingredients. We're happy to accommodate vegetarian diets and can prepare kid-friendly versions of our dishes upon request."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know for a perfect stay at Glory Nest
            </p>
          </div>

          <div className="glass-card p-8 animate-fade-up">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;