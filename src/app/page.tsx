"use client";
import { useEffect, useState } from "react";
import BlogsSection from "@/components/Blogs/Blogs";
import DeveloperHub from "@/components/Developer/Developer";
import PartnerShowcase from "@/components/Ecosystem/Ecosystem";
import FAQSection from "@/components/FAQs/FAQ";
import FeaturesSectionV2 from "@/components/Features/Features";
import HeroSection from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";
import CatalystStats from "@/components/CatalysisStats/CatalysisStats";
import Roadmap from "@/components/Roadmap/Roadmap";
import useTheme from "@/hooks/useTheme";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      className={`${theme} flex flex-col gap-[200px] bg-white dark:bg-black-30 text-black dark:text-white`}
    >
      <Navbar />
      <HeroSection />
      <FeaturesSectionV2 />
      <CatalystStats />
      <PartnerShowcase />
      <Roadmap />
      <BlogsSection />
      <FAQSection />
      <DeveloperHub />
      <Footer />
    </div>
  );
}
