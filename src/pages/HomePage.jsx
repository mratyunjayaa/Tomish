import HeroSection from "../components/hero/HeroSection";
import StatsBar  from "./StateBar" 
import  ProcessTimeline  from "./ProcessTimeline"
import FounderSection  from "./FounderSection";
import FeatureSection from "./FeatureSection";
import  TestimonialsSection  from "./TestimonialsSection";
import CtaBanner  from "../components/common/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsBar />
      <FounderSection />
      <FeatureSection />
      <CtaBanner />
      <ProcessTimeline />
      <TestimonialsSection />
    </div>
  );
}