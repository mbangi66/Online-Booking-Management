import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import { AMMAR_TOUR_CATEGORIES } from "@/data/ammarTours";

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories
          categories={AMMAR_TOUR_CATEGORIES.slice(0, 6)}
          heading="Signature Ammar Tours experiences"
          subHeading="Desert adventures, cruises, and city tours built around Dubai travelers"
        />

        <SectionOurFeatures />

        <SectionHowItWork />

        <div className="relative py-16">
          <SectionSliderNewCategories
            categories={AMMAR_TOUR_CATEGORIES}
            categoryCardType="card4"
            itemPerRow={4}
            heading="More tours from Ammar Tours"
            subHeading="Compare safari styles, add-on adventures, and full-day city trips"
            sliderStyle="style2"
          />
        </div>

        <SectionSubscribe2 />
      </div>
    </main>
  );
}

export default PageHome;
