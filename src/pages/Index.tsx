
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import FixturesList from "@/components/FixturesList";
import CommunitySection from "@/components/CommunitySection";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <NewsSection />
      <FixturesList />
      <CommunitySection />
      <NewsletterSubscribe />
      <Footer />
    </div>
  );
};

export default Index;
