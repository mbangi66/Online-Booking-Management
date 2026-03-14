import { SocialType } from "@/shared/SocialsShare";
import React, { FC } from "react";
import { AMMAR_TOURS_CONTACT } from "@/data/ammarTours";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "Website", icon: "las la-globe", href: AMMAR_TOURS_CONTACT.website },
  { name: "Email", icon: "las la-envelope", href: AMMAR_TOURS_CONTACT.emailHref },
  { name: "Phone", icon: "las la-phone", href: AMMAR_TOURS_CONTACT.phoneHref },
  { name: "WhatsApp", icon: "lab la-whatsapp", href: AMMAR_TOURS_CONTACT.whatsappHref },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
