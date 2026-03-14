import { SocialType } from "@/shared/SocialsShare";
import React, { FC } from "react";
import { AMMAR_TOURS_CONTACT } from "@/data/ammarTours";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: "Website", icon: "las la-globe", href: AMMAR_TOURS_CONTACT.website },
  { name: "Email", icon: "las la-envelope", href: AMMAR_TOURS_CONTACT.emailHref },
  { name: "Phone", icon: "las la-phone", href: AMMAR_TOURS_CONTACT.phoneHref },
  { name: "WhatsApp", icon: "lab la-whatsapp", href: AMMAR_TOURS_CONTACT.whatsappHref },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
        <i className={item.icon}></i>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
