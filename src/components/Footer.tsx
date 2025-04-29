
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cricket-navy/95 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-cricket-pitch flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl">Willow & Wickets</span>
            </div>
            <p className="text-gray-300 mb-6">
              A community for cricket lovers to connect, share, and celebrate the sport together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#fixtures" className="text-gray-300 hover:text-white transition-colors">Fixtures</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Cricket Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Match Stats</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Player Profiles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cricket Rules</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Video Archives</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@willowwickets.com" className="text-gray-300 hover:text-white transition-colors">info@willowwickets.com</a>
              </li>
            </ul>
            <p className="mt-4 text-gray-400 text-sm">
              Have suggestions or feedback? We'd love to hear from you!
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Willow & Wickets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
