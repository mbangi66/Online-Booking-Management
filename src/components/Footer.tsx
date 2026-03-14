"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "1",
    title: "Ammar Tours",
    menus: [
      { href: "/", label: "Home" },
      { href: "/listing-experiences", label: "All Tours" },
      { href: "/contact", label: "Contact" },
      { href: "https://ammartours.com/", label: "Official Website" },
    ],
  },
  {
    id: "2",
    title: "Popular Tours",
    menus: [
      { href: "/listing-experiences", label: "Evening Desert Safari" },
      { href: "/listing-experiences", label: "Morning Desert Safari" },
      { href: "/listing-experiences", label: "Private Desert Safari" },
      { href: "/listing-experiences", label: "Dune Buggy Ride" },
      { href: "/listing-experiences", label: "Dubai City Tour" },
    ],
  },
  {
    id: "4",
    title: "Contact",
    menus: [
      { href: "tel:+971501234765", label: "+971 50 123 4765" },
      { href: "mailto:info@ammartours.com", label: "info@ammartours.com" },
      { href: "https://wa.me/971501234765", label: "WhatsApp Booking" },
      { href: "https://ammartours.com/", label: "Dubai, UAE" },
    ],
  },
  {
    id: "5",
    title: "Plan Your Trip",
    menus: [
      { href: "/listing-experiences", label: "Desert Safari Packages" },
      { href: "/listing-experiences", label: "Cruises & Attractions" },
      { href: "/listing-experiences", label: "Abu Dhabi Tours" },
      { href: "/listing-experiences", label: "Private Group Tours" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  );
};

export default Footer;
