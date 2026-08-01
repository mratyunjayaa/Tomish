import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProcessTimeline from "./pages/ProcessTimeline";
import FounderSection from "./pages/FounderSection";
import FeatureSection from "./pages/FeatureSection";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/ContactForm";
import UnderMaintenance from "./pages/UnderMaintenance";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/about" element={<FounderSection />} />
        <Route path="/news" element={<UnderMaintenance />} />
        <Route path="/process" element={<ProcessTimeline />} />
        <Route path="/contact" element={<ContactForm />} />
      </Route>
    </Routes>
  );
}