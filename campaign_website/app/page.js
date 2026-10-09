import Header from "../components/Header";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import FeaturedCollection from "../components/FeaturedCollection";
import CampaignBanner from "../components/CampaignBanner";
import StorySection from "../components/StorySection";
import CommunitySection from "../components/CommunitySection";
import BrandValues from "../components/BrandValues";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#242126]">
      <Header />
      <Hero />
      <Manifesto />
      <FeaturedCollection />
      <CampaignBanner />
      <StorySection />
      <CommunitySection />
      <BrandValues />
      <Newsletter />
      <Footer />
    </main>
  );
}
