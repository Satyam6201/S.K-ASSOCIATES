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
    <div className="bg-gradient-to-b from-[#f4f7fb] via-[#eaf2fb] to-[#f4f7fb] dark:from-[#070d1e] dark:via-[#0d1730] dark:to-[#070d1e] text-slate-900 dark:text-slate-100 transition-colors duration-500 min-h-screen">
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