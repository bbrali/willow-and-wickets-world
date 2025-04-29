
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-cricket-navy/95 to-cricket-pitch-dark/95">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to Cricket's Most Passionate Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join fellow enthusiasts to discuss matches, share news, and celebrate the sport we all love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-cricket-pitch hover:bg-cricket-pitch-dark text-white px-8 py-6 text-lg">
              Join Community
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
              Explore Content
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
