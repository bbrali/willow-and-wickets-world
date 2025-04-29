
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "England Triumph in Thrilling T20 Series Against Australia",
    excerpt: "A stunning century from Jos Buttler led England to a decisive victory in the final match of the T20 series.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1067&auto=format&fit=crop",
    date: "Apr 28, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "ICC Announces New Format for World Test Championship",
    excerpt: "The International Cricket Council has revealed changes to the World Test Championship structure starting next season.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1067&auto=format&fit=crop",
    date: "Apr 25, 2025",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Rising Star Shines in IPL Debut Season",
    excerpt: "Young talent makes waves with spectacular batting performances in his inaugural Indian Premier League season.",
    image: "https://images.unsplash.com/photo-1624728251760-d8b57a79cd0e?q=80&w=1067&auto=format&fit=crop",
    date: "Apr 22, 2025",
    readTime: "6 min read"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 headline-gradient">Latest Cricket News</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">Stay updated with the latest happenings from the world of cricket.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cricket-card-gradient">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="flex items-center mt-2">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="h-3 w-3 mr-1" /> {item.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-cricket-pitch hover:text-cricket-pitch-dark hover:bg-cricket-pitch/10">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-cricket-pitch text-cricket-pitch hover:bg-cricket-pitch hover:text-white">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
