import { Sunrise, Coffee, BookOpen, Sunset } from "lucide-react";

const ImagineYourStay = () => {
  const moments = [
    {
      icon: Sunrise,
      title: "Morning sunlight & bird calls",
      description: "Wake naturally to gentle sunlight filtering through your windows and the melodic songs of local birds – no harsh alarms needed.",
      time: "Morning"
    },
    {
      icon: Coffee,
      title: "Breakfast by the pool",
      description: "Savor authentic Vietnamese breakfast made with fresh local ingredients while enjoying the tranquil pool atmosphere.",
      time: "Morning"
    },
    {
      icon: BookOpen,
      title: "Quiet afternoon moments",
      description: "Find your perfect spot in our sunken couch with a good book, or simply enjoy the peaceful garden views.",
      time: "Afternoon"
    },
    {
      icon: Sunset,
      title: "Evening magic",
      description: "Watch stunning rooftop sunsets, unwind in our sauna, or gather for a family dinner filled with stories and laughter.",
      time: "Evening"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Imagine Your Stay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment at Glory Nest is crafted to help you slow down, 
            connect with yourself and loved ones, and create lasting memories.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {moments.map((moment, index) => (
            <div 
              key={moment.title}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 animate-fade-up ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1 glass-card p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <moment.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-medium">{moment.time}</span>
                    <h3 className="font-semibold text-xl text-foreground">
                      {moment.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {moment.description}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-80 h-60 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
                    {moment.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass-card p-8 max-w-2xl mx-auto animate-fade-up">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Glorynest in 3 Words
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