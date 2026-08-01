import React from "react";
import HeroSection from "../components/hero/HeroSection";
import StateBar from "./StateBar";
import ServicesSection from "../components/ServicesSection";
import FounderSection from "./FounderSection";
import FeatureSection from "./FeatureSection";
import ProcessTimeline from "./ProcessTimeline";
import TestimonialsSection from "./TestimonialsSection";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StateBar />
      <ServicesSection />
      <FounderSection />
      <FeatureSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}