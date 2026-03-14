import React, { FC } from "react";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { AMMAR_TOURS_CONTACT } from "@/data/ammarTours";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Dubai desert safaris, cruises, and city tours by Ammar Tours
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Book evening and morning desert safari packages, dune buggy rides,
            dhow cruises, and private UAE tours with fast support from the
            Ammar Tours team.
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <ButtonPrimary href="/listing-experiences" sizeClass="px-5 py-4 sm:px-7">
              Explore tours
            </ButtonPrimary>
            <a
              href={AMMAR_TOURS_CONTACT.phoneHref}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Call {AMMAR_TOURS_CONTACT.phone}
            </a>
          </div>
        </div>
        <div className="flex-grow">
          <Image 
            className="w-full rounded-3xl" 
            src="https://images.pexels.com/photos/16271319/pexels-photo-16271319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Dubai desert safari camels in the dunes" 
            width={1260}
            height={750}
            priority 
          />
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
