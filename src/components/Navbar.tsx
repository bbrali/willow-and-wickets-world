
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-cricket-pitch flex items-center justify-center">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <span className="font-bold text-xl text-cricket-navy">Willow & Wickets</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-cricket-pitch-dark transition-colors">Home</a>
          <a href="#news" className="font-medium hover:text-cricket-pitch-dark transition-colors">News</a>
          <a href="#fixtures" className="font-medium hover:text-cricket-pitch-dark transition-colors">Fixtures</a>
          <a href="#community" className="font-medium hover:text-cricket-pitch-dark transition-colors">Community</a>
          <Button className="bg-cricket-pitch hover:bg-cricket-pitch-dark">Join Us</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full border-b border-gray-200 py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="font-medium p-2 hover:bg-gray-50 rounded">Home</a>
            <a href="#news" className="font-medium p-2 hover:bg-gray-50 rounded">News</a>
            <a href="#fixtures" className="font-medium p-2 hover:bg-gray-50 rounded">Fixtures</a>
            <a href="#community" className="font-medium p-2 hover:bg-gray-50 rounded">Community</a>
            <Button className="bg-cricket-pitch hover:bg-cricket-pitch-dark w-full">Join Us</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
