import React from "react";
import SEO from "../components/common/SEO";
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
      <SEO 
        title="Chartered Accountants & Tax Advisory Consultants Noida NCR"
        description="S.K Associates is a premier CA firm in Noida NCR. We specialize in Income Tax Appeals, GST Advisory, Statutory Audits, MCA ROC Compliances, and Virtual CFO services."
        keywords="Chartered Accountants Noida, CA Firm Noida, Tax Consultants Delhi NCR, Income Tax Filing, GST Advisory, Statutory Audit, ROC Filings, Virtual CFO, Sunil Choudhary CA"
        canonicalPath="/"
      />
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