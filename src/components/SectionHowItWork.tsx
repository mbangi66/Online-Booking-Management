import React, { FC } from "react";
import VectorImg from "@/images/VectorHIW.svg";
import Image, { StaticImageData } from "next/image";
import Heading from "@/shared/Heading";
import { DUBAI_HOW_IT_WORK_IMAGES } from "@/data/dubaiMedia";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    img: StaticImageData | string;
    imgDark?: StaticImageData | string;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    img: DUBAI_HOW_IT_WORK_IMAGES[0],
    title: "1. Pick your tour",
    desc: "Choose from desert safaris, buggy rides, dhow cruises, or city tours based on your schedule and group size.",
  },
  {
    id: 2,
    img: DUBAI_HOW_IT_WORK_IMAGES[1],
    title: "2. Confirm your booking",
    desc: "Reserve online or contact Ammar Tours on phone or WhatsApp for fast confirmation, private options, and pickup details.",
  },
  {
    id: 3,
    img: DUBAI_HOW_IT_WORK_IMAGES[2],
    title: "3. Enjoy Dubai",
    desc: "Meet your guide, head into the dunes or city, and enjoy the activities included in your chosen package.",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading isCenter desc="Ammar Tours keeps the booking flow simple from inquiry to pickup">
        How it works
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <Image
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        />
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {item.imgDark ? (
              <>
                <Image
                  className="dark:hidden block mb-8 max-w-[180px] mx-auto"
                  src={item.img}
                  alt=""
                />
                <Image
                  alt=""
                  className="hidden dark:block mb-8 max-w-[180px] mx-auto"
                  src={item.imgDark}
                />
              </>
            ) : (
              <Image
                alt=""
                className="mb-8 w-40 h-40 rounded-full object-cover mx-auto"
                src={item.img}
                width={180}
                height={180}
              />
            )}
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
