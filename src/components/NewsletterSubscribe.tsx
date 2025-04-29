
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-cricket-navy py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-gray-200 mb-8">
            Subscribe to our newsletter to receive the latest cricket news, match updates, and community highlights.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              required
            />
            <Button 
              type="submit" 
              className="bg-cricket-pitch hover:bg-cricket-pitch-dark text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy and will never share your email address.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
