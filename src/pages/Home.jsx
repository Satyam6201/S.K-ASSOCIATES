import React from "react";
import HeroSection from "../components/home/HeroSection";
import TickerMarquee from "../components/home/TickerMarquee";
import TaxEstimatorWidget from "../components/home/TaxEstimatorWidget";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import ServicesGridSection from "../components/home/ServicesGridSection";
import ComplianceCalendarSection from "../components/home/ComplianceCalendarSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FaqSection from "../components/home/FaqSection";
import CtaBannerSection from "../components/home/CtaBannerSection";

const Home = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500 min-h-screen">
      <HeroSection />
      <TickerMarquee />
      <TaxEstimatorWidget />
      <WhyChooseUsSection />
      <ServicesGridSection />
      <ComplianceCalendarSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBannerSection />
    </div>
  );
};

export default Home;