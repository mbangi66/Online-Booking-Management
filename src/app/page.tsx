import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionVideos from "@/components/SectionVideos";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-experiences",
    name: "Evening Desert Safari",
    taxonomy: "category",
    count: 250,
    thumbnail:
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-experiences",
    name: "Dubai City Tour",
    taxonomy: "category",
    count: 150,
    thumbnail:
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-experiences",
    name: "Dhow Cruise Marina",
    taxonomy: "category",
    count: 200,
    thumbnail:
      "https://images.pexels.com/photos/326462/pexels-photo-326462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-experiences",
    name: "Dune Buggy Drive",
    taxonomy: "category",
    count: 550,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-experiences",
    name: "Abu Dhabi City Tour",
    taxonomy: "category",
    count: 220,
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-experiences",
    name: "Morning Desert Safari",
    taxonomy: "category",
    count: 130,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-experiences",
    name: "Hatta Mountain Tour",
    taxonomy: "category",
    count: 200,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-experiences",
    name: "Quad Biking Dubai",
    taxonomy: "category",
    count: 300,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-experiences",
    name: "Camel Riding",
    taxonomy: "category",
    count: 285,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-experiences",
    name: "Sharjah & Ajman Tour",
    taxonomy: "category",
    count: 280,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-experiences",
    name: "Musandam Dibba Cruise",
    taxonomy: "category",
    count: 400,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-experiences",
    name: "Dinner Tour In Dhow Cruise",
    taxonomy: "category",
    count: 250,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-experiences",
    name: "Private Desert Safari",
    taxonomy: "category",
    count: 1200,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-experiences",
    name: "Atlantis Aquaventure",
    taxonomy: "category",
    count: 350,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={DEMO_CATS} />

        <SectionOurFeatures />

        <SectionHowItWork />

        <div className="relative py-16">
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Popular Tours & Safaris"
            subHeading="Top-rated experiences by Ammar Tours"
            sliderStyle="style2"
          />
        </div>

        <SectionVideos />

        <SectionSubscribe2 />
      </div>
    </main>
  );
}

export default PageHome;
