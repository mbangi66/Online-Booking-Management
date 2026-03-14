import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Logo from "@/shared/Logo";
import Image from "next/image";
import { DUBAI_MEDIA } from "@/data/dubaiMedia";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = DUBAI_MEDIA.bookingHero,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Why book with Ammar Tours?
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
          Choose a team focused on Dubai desert safaris, adventure activities,
          cruises, and city tours instead of a generic marketplace experience.
        </span>
        <ButtonPrimary className="mt-6 sm:mt-11" href="/listing-experiences">
          Explore packages
        </ButtonPrimary>
      </div>
      <div className="flex-grow">
        <Image
          alt="Dubai Marina tour scene"
          src={rightImg}
          width={1200}
          height={900}
          className="w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
