import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";
import { AMMAR_HOME_FEATURES } from "@/data/ammarTours";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData | string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg =
    "https://images.pexels.com/photos/14585894/pexels-photo-14585894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image
          src={rightImg}
          alt="Dubai desert safari scene"
          width={1200}
          height={900}
          className="w-full rounded-3xl object-cover"
        />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Why Ammar Tours
        </span>
        <h2 className="font-semibold text-4xl mt-5">
          Built for Dubai tour bookings
        </h2>

        <ul className="space-y-10 mt-16">
          {AMMAR_HOME_FEATURES.map((feature) => (
            <li key={feature.title} className="space-y-4">
              <Badge color={feature.badgeColor} name={feature.badge} />
              <span className="block text-xl font-semibold">{feature.title}</span>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {feature.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
