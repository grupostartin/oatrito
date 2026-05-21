/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/layout/Navbar";
import { VerticalSpine } from "./components/layout/VerticalSpine";
import { Hero } from "./components/sections/Hero";
import { Tension } from "./components/sections/Tension";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Features } from "./components/sections/Features";
import { SocialProof } from "./components/sections/SocialProof";
import { Security } from "./components/sections/Security";
import { Pricing } from "./components/sections/Pricing";
import { FAQ } from "./components/sections/FAQ";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <div className="noise-bg"></div>
      <VerticalSpine />
      <Navbar />
      
      <main>
        <Hero />
        <Tension />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Security />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

