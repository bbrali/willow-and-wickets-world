
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const fixtures = [
  {
    id: 1,
    team1: "England",
    team2: "Australia",
    team1Flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    team2Flag: "🇦🇺",
    format: "ODI",
    date: "May 3, 2025",
    venue: "Lord's, London",
    time: "11:00 AM",
    status: "upcoming"
  },
  {
    id: 2,
    team1: "India",
    team2: "Pakistan",
    team1Flag: "🇮🇳",
    team2Flag: "🇵🇰",
    format: "T20",
    date: "May 7, 2025",
    venue: "Dubai International Stadium",
    time: "2:30 PM",
    status: "upcoming"
  },
  {
    id: 3,
    team1: "New Zealand",
    team2: "South Africa",
    team1Flag: "🇳🇿",
    team2Flag: "🇿🇦",
    format: "Test",
    date: "May 10-14, 2025",
    venue: "Eden Park, Auckland",
    time: "10:00 AM",
    status: "upcoming"
  },
  {
    id: 4,
    team1: "West Indies",
    team2: "Sri Lanka",
    team1Flag: "🇼🇮",
    team2Flag: "🇱🇰",
    format: "ODI",
    date: "May 15, 2025",
    venue: "Kensington Oval, Barbados",
    time: "1:00 PM",
    status: "upcoming"
  }
];

const FixturesList = () => {
  return (
    <section id="fixtures" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 headline-gradient">Upcoming Fixtures</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss any action with our complete schedule of upcoming cricket matches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {fixtures.map((fixture) => (
            <Card key={fixture.id} className="cricket-card-gradient hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <Badge className="bg-cricket-sky text-white">{fixture.format}</Badge>
                  <span className="text-sm flex items-center text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" /> {fixture.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col items-center w-5/12">
                    <span className="text-4xl mb-2">{fixture.team1Flag}</span>
                    <span className="font-medium">{fixture.team1}</span>
                  </div>
                  <div className="text-center w-2/12">
                    <span className="font-bold text-lg">VS</span>
                  </div>
                  <div className="flex flex-col items-center w-5/12">
                    <span className="text-4xl mb-2">{fixture.team2Flag}</span>
                    <span className="font-medium">{fixture.team2}</span>
                  </div>
                </div>
                <div className="border-t pt-3 mt-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-cricket-navy">Venue:</span> {fixture.venue}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-cricket-navy">Time:</span> {fixture.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixturesList;
