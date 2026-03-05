import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/listing-experiences",
    name: "Desert Safari",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-experiences", name: "Evening Desert Safari" },
      { id: ncNanoId(), href: "/listing-experiences", name: "Morning Desert Safari" },
      { id: ncNanoId(), href: "/listing-experiences", name: "Private Desert Safari" },
      { id: ncNanoId(), href: "/listing-experiences", name: "Dune Buggy Drive" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/listing-experiences",
    name: "City Tours",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-experiences", name: "Dubai City Tour" },
      { id: ncNanoId(), href: "/listing-experiences", name: "Abu Dhabi City Tour" },
      { id: ncNanoId(), href: "/listing-experiences", name: "Sharjah & Ajman Tour" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/listing-experiences",
    name: "Cruises & Attractions",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-experiences", name: "Dhow Cruise Marina" },
      { id: ncNanoId(), href: "/listing-experiences", name: "Dhow Cruise Creek" },
      { id: ncNanoId(), href: "/listing-experiences", name: "Burj Khalifa Tickets" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = NAVIGATION_DEMO;
