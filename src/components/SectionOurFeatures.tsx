import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
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
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENnefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Happening cities </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Experience" />
            <span className="block text-xl font-semibold">
              10+ Years of Experience
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              We are a leading Tour Operator in Dubai with over a decade of excellence in organizing unforgettable tours.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Quality" />
            <span className="block text-xl font-semibold">
              Premium 5-Star Service
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Enjoy luxurious land cruisers and top-tier desert safari experiences tailored for your comfort and thrill.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Satisfaction" />
            <span className="block text-xl font-semibold">
              Highly Rated
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Over 10,000 satisfied customers have rated us 5 stars for our exceptional tours, making us a top choice in Dubai.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
