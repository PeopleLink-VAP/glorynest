import { Sunrise, Coffee, BookOpen, Sunset, Sparkles } from "lucide-react";
import cozyBreakfast from "@/assets/cozy-breakfast.jpg";
import homeCooking from "@/assets/home-cooking.jpg";
import readingCorner from "@/assets/reading-corner.jpg";
import { getSparrowIcon } from "@/lib/sparrowUtils";

const ImagineYourStay = () => {
  const sparrowIcon1 = getSparrowIcon();
  const sparrowIcon2 = getSparrowIcon();
  const moments = [
    {
      icon: Coffee,
      title: "Morning breakfast by the pool",
      description: "Start your day with authentic Vietnamese pho and fresh tropical fruits by your private pool. The sparrows sing as steam rises from your coffee cup.",
      time: "Morning",
      image: cozyBreakfast
    },
    {
      icon: BookOpen,
      title: "Afternoon reading sanctuary",
      description: "Curl up in our cozy reading corner with a good book. Natural light streams through while the garden whispers its peaceful stories.",
      time: "Afternoon", 
      image: readingCorner
    },
    {
      icon: Sunset,
      title: "Evening family cooking",
      description: "Join us in the kitchen to learn grandmother's recipes. Share stories and laughter while creating meals that taste like home.",
      time: "Evening",
      image: homeCooking
    }
  ];

  return (
    <section className="py-20 bg-secondary/3 relative overflow-hidden">
      {/* Decorative sparrows */}
      <div className="absolute top-20 right-10 opacity-20">
        <img src={sparrowIcon1} alt="" className="w-10 h-10" />
      </div>
      <div className="absolute bottom-32 left-8 opacity-30">
        <img src={sparrowIcon2} alt="" className="w-8 h-8 transform scale-x-[-1]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Your Day at Glory Nest</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-foreground mb-6">
            Live Like Family, Not a Tourist
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience authentic Vietnamese family life in your private villa sanctuary. 
            Every moment unfolds naturally, like visiting dear friends.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {moments.map((moment, index) => (
            <div 
              key={moment.title}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="glass-card p-8 relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <moment.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="font-sans text-sm text-primary font-medium uppercase tracking-wide">{moment.time}</span>
                      <h3 className="font-sans text-2xl font-semibold text-foreground">
                        {moment.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                    {moment.description}
                  </p>
                  
                  {/* Decorative sparrow */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <img src={getSparrowIcon()} alt="" className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-96 h-72 rounded-2xl overflow-hidden glass-card">
                  <img 
                    src={moment.image} 
                    alt={moment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass-card p-8 max-w-2xl mx-auto mt-20">
          <h3 className="font-display text-3xl font-normal text-foreground mb-4">
            Glory Nest in Three Words
          </h3>
          <div className="flex justify-center space-x-8 text-lg">
            <span className="text-primary font-medium">Cozy.</span>
            <span className="text-primary font-medium">Authentic.</span>
            <span className="text-primary font-medium">Belonging.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagineYourStay;