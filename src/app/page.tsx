"use client";
import { useEffect, useState } from "react";
import BlogsSection from "@/components/Blogs";
import DeveloperHub from "@/components/Developer";
import PartnerShowcase from "@/components/Ecosystem";
import FAQSection from "@/components/FAQs";
import FeaturesSection from "@/components/Features";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CatalystStats from "@/components/CatalysisStats";
import Roadmap from "@/components/Roadmap";
import useTheme from "@/hooks/useTheme";
import Footer from "@/components/Footer";

export default function Home() {
  const {
    theme,
    //  toggleTheme
  } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${theme} flex flex-col gap-[30px] md:gap-[60px] bg-white dark:bg-black-30 text-black dark:text-white`}
    >
      <Navbar
      //  toggleTheme={toggleTheme}
      />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="stats">
        <CatalystStats />
      </div>
      <div id="ecosystem">
        <PartnerShowcase />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="blog">
        <BlogsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="docs">
        <DeveloperHub />
      </div>
      <Footer />
    </div>
  );
}
