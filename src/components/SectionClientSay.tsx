"use client";

import Heading from "@/shared/Heading";
import React, { FC, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { variants } from "@/utils/animationVariants";
import { DUBAI_MEDIA, DUBAI_TESTIMONIALS } from "@/data/dubaiMedia";

export interface SectionClientSayProps {
  className?: string;
  data?: typeof DUBAI_TESTIMONIALS;
}

const SectionClientSay: FC<SectionClientSayProps> = ({
  className = "",
  data = DUBAI_TESTIMONIALS,
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function changeItemId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < data?.length - 1) {
        changeItemId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changeItemId(index - 1);
      }
    },
    trackMouse: true,
  });

  const currentItem = data[index];

  return (
    <div className={`nc-SectionClientSay relative ${className} `}>
      <Heading
        desc="Feedback from travelers who booked desert safaris, adventure rides, and Dubai city tours"
        isCenter
      >
        Guest reviews
      </Heading>
      <div className="relative md:mb-16 max-w-4xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
          <Image
            src={DUBAI_MEDIA.archiveHero}
            alt="Dubai skyline"
            width={1400}
            height={800}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
        </div>
        <div className="relative -mt-20 md:-mt-24 px-6">
          <MotionConfig
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <div
              className="relative whitespace-nowrap overflow-hidden max-w-2xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-10"
              {...handlers}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants(200, 1)}
                  initial="enter"
                  animate="center"
                  className="inline-flex flex-col items-center text-center whitespace-normal"
                >
                  <Image
                    src={currentItem.image}
                    alt={currentItem.clientName}
                    width={88}
                    height={88}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <span className="block text-xl md:text-2xl mt-6">
                    {currentItem.content}
                  </span>
                  <span className="block mt-8 text-2xl font-semibold">
                    {currentItem.clientName}
                  </span>
                  <div className="flex items-center space-x-2 text-lg mt-2 text-neutral-400">
                    <MapPinIcon className="h-5 w-5" />
                    <span>{currentItem.clientAddress}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-center space-x-2">
                {data.map((item, i) => (
                  <button
                    className={`w-2 h-2 rounded-full ${
                      i === index ? "bg-black/70" : "bg-black/10 "
                    }`}
                    onClick={() => changeItemId(i)}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </MotionConfig>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
