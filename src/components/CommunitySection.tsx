
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageCircle, Heart, Share } from "lucide-react";

const discussions = [
  {
    id: 1,
    user: {
      name: "Michael Clarke",
      avatar: "MC",
      username: "@michaelclarke"
    },
    post: "What do you all think about the new lbw rule changes? I feel it's going to significantly affect how batsmen approach playing on the front foot.",
    comments: 24,
    likes: 89,
    time: "2h ago"
  },
  {
    id: 2,
    user: {
      name: "Sarah Taylor",
      avatar: "ST",
      username: "@sarahtaylor"
    },
    post: "Just watched the highlights of yesterday's match. That catch by Stokes was absolutely incredible! One of the best I've seen in years.",
    comments: 32,
    likes: 127,
    time: "5h ago"
  },
  {
    id: 3,
    user: {
      name: "Rahul Sharma",
      avatar: "RS",
      username: "@rahulsharma"
    },
    post: "Any predictions for the top run-scorer this IPL season? I'm thinking Kohli might regain his top form this year!",
    comments: 46,
    likes: 152,
    time: "8h ago"
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold headline-gradient mb-2">Join the Conversation</h2>
            <p className="text-gray-600 max-w-2xl">
              Connect with fellow cricket enthusiasts and share your thoughts on the latest matches, players, and controversies.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-cricket-navy hover:bg-cricket-navy/90">
            Start a Discussion
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {discussions.map((discussion) => (
            <Card key={discussion.id} className="cricket-card-gradient hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src="" alt={discussion.user.name} />
                  <AvatarFallback className="bg-cricket-sky text-white">{discussion.user.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{discussion.user.name}</p>
                  <p className="text-sm text-gray-500">{discussion.user.username} • {discussion.time}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">{discussion.post}</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-cricket-pitch">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{discussion.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-cricket-sky">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{discussion.comments}</span>
                  </button>
                </div>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-cricket-navy">
                  <Share className="h-4 w-4" />
                  <span className="text-sm">Share</span>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-cricket-navy text-cricket-navy hover:bg-cricket-navy hover:text-white">
            Load More Discussions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
