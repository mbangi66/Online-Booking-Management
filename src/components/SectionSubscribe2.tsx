import React, { FC } from "react";
import Badge from "@/shared/Badge";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { AMMAR_TOURS_CONTACT } from "@/data/ammarTours";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Talk to Ammar Tours before you book</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Get help choosing the right desert safari, private trip, or cruise,
          then confirm your booking directly with the team.
        </span>
        <ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Call {AMMAR_TOURS_CONTACT.phone}
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Email {AMMAR_TOURS_CONTACT.email}
            </span>
          </li>
        </ul>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <ButtonPrimary href={AMMAR_TOURS_CONTACT.whatsappHref} targetBlank>
            Chat on WhatsApp
          </ButtonPrimary>
          <ButtonSecondary href={AMMAR_TOURS_CONTACT.website} targetBlank>
            Visit ammartours.com
          </ButtonSecondary>
        </div>
      </div>
      <div className="flex-grow">
        <Image
          alt="Dubai skyline and tour planning"
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
          width={1200}
          height={900}
          className="w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
