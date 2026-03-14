import { Route } from "@/routers/types";
import { ExperiencesDataType, TaxonomyType, TwMainColor } from "./types";
import { DEMO_AUTHORS } from "./authors";

const listingHref = "/listing-experiences-detail" as Route<string>;
const archiveHref = "/listing-experiences" as Route<string>;
const IMAGE_DESERT_CAMELS =
  "https://images.pexels.com/photos/16271319/pexels-photo-16271319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_DESERT_CAMEL =
  "https://images.pexels.com/photos/8003129/pexels-photo-8003129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_DUNE_BUGGY_SUNSET =
  "https://images.pexels.com/photos/29708645/pexels-photo-29708645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_DUNE_BUGGY_DAY =
  "https://images.pexels.com/photos/14585894/pexels-photo-14585894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_DUBAI_MARINA =
  "https://images.pexels.com/photos/4624570/pexels-photo-4624570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_DUBAI_ABRA =
  "https://images.pexels.com/photos/35132526/pexels-photo-35132526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_DUBAI_SKYLINE =
  "https://images.pexels.com/photos/35664165/pexels-photo-35664165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_DUBAI_BURJ =
  "https://images.pexels.com/photos/34218532/pexels-photo-34218532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const IMAGE_ABU_DHABI_MOSQUE =
  "https://images.pexels.com/photos/32045630/pexels-photo-32045630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

export const AMMAR_TOURS_CONTACT = {
  phone: "+971 50 123 4765",
  phoneHref: "tel:+971501234765",
  whatsappHref: "https://wa.me/971501234765",
  email: "info@ammartours.com",
  emailHref: "mailto:info@ammartours.com",
  website: "https://ammartours.com/",
  location: "Dubai, United Arab Emirates",
};

export const AMMAR_TOUR_CATEGORIES: TaxonomyType[] = [
  {
    id: "cat-1",
    name: "Evening Desert Safari",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_DESERT_CAMELS,
  },
  {
    id: "cat-2",
    name: "Morning Desert Safari",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_DESERT_CAMEL,
  },
  {
    id: "cat-3",
    name: "Private Desert Safari",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_DESERT_CAMELS,
  },
  {
    id: "cat-4",
    name: "Dune Buggy Dubai",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_DUNE_BUGGY_SUNSET,
  },
  {
    id: "cat-5",
    name: "Quad Biking Dubai",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_DUNE_BUGGY_DAY,
  },
  {
    id: "cat-6",
    name: "Dhow Cruise Marina",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_DUBAI_ABRA,
  },
  {
    id: "cat-7",
    name: "Dubai City Tour",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_DUBAI_BURJ,
  },
  {
    id: "cat-8",
    name: "Abu Dhabi City Tour",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail: IMAGE_ABU_DHABI_MOSQUE,
  },
];

const host = {
  ...DEMO_AUTHORS[0],
  firstName: "Ammar",
  lastName: "Tours",
  displayName: "Ammar Tours Team",
  email: AMMAR_TOURS_CONTACT.email,
  jobName: "Dubai tour operator",
  desc: "Specialists in Dubai desert safaris, dune buggy rides, dhow cruises, and private city tours.",
  count: 8,
};

export const AMMAR_TOUR_LISTINGS: ExperiencesDataType[] = [
  {
    id: "ammar-1",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Evening Desert Safari Dubai",
    featuredImage: IMAGE_DESERT_CAMELS,
    galleryImgs: [
      IMAGE_DESERT_CAMELS,
      IMAGE_DESERT_CAMEL,
      "https://images.pexels.com/photos/11134074/pexels-photo-11134074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/10794659/pexels-photo-10794659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    commentCount: 124,
    viewCount: 2480,
    address: "Al Lahbab Desert, Dubai",
    reviewStart: 5,
    reviewCount: 312,
    like: true,
    price: "AED 130",
    listingCategory: AMMAR_TOUR_CATEGORIES[0],
    maxGuests: 6,
    saleOff: "Best Seller",
    isAds: true,
    map: { lat: 24.8615, lng: 55.6021 },
  },
  {
    id: "ammar-2",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Morning Desert Safari Dubai",
    featuredImage: IMAGE_DESERT_CAMEL,
    galleryImgs: [
      IMAGE_DESERT_CAMEL,
      "https://images.pexels.com/photos/8003134/pexels-photo-8003134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/12643027/pexels-photo-12643027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    commentCount: 64,
    viewCount: 1640,
    address: "Dubai Desert Conservation Area",
    reviewStart: 4.9,
    reviewCount: 181,
    like: false,
    price: "AED 120",
    listingCategory: AMMAR_TOUR_CATEGORIES[1],
    maxGuests: 6,
    saleOff: null,
    isAds: null,
    map: { lat: 24.8483, lng: 55.5061 },
  },
  {
    id: "ammar-3",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Private Desert Safari",
    featuredImage: IMAGE_DESERT_CAMELS,
    galleryImgs: [
      IMAGE_DESERT_CAMELS,
      "https://images.pexels.com/photos/11134074/pexels-photo-11134074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      IMAGE_DESERT_CAMEL,
    ],
    commentCount: 48,
    viewCount: 1280,
    address: "Private pickup anywhere in Dubai",
    reviewStart: 5,
    reviewCount: 97,
    like: true,
    price: "AED 699",
    listingCategory: AMMAR_TOUR_CATEGORIES[2],
    maxGuests: 6,
    saleOff: "Private",
    isAds: null,
    map: { lat: 25.2048, lng: 55.2708 },
  },
  {
    id: "ammar-4",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Dune Buggy Ride Dubai",
    featuredImage: IMAGE_DUNE_BUGGY_SUNSET,
    galleryImgs: [
      IMAGE_DUNE_BUGGY_SUNSET,
      IMAGE_DUNE_BUGGY_DAY,
      "https://images.pexels.com/photos/15252145/pexels-photo-15252145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    commentCount: 59,
    viewCount: 1755,
    address: "Red Dunes, Lahbab",
    reviewStart: 4.9,
    reviewCount: 154,
    like: false,
    price: "AED 600",
    listingCategory: AMMAR_TOUR_CATEGORIES[3],
    maxGuests: 2,
    saleOff: null,
    isAds: null,
    map: { lat: 24.8607, lng: 55.6097 },
  },
  {
    id: "ammar-5",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Quad Biking Adventure",
    featuredImage: IMAGE_DUNE_BUGGY_DAY,
    galleryImgs: [
      IMAGE_DUNE_BUGGY_DAY,
      "https://images.pexels.com/photos/15252145/pexels-photo-15252145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      IMAGE_DUNE_BUGGY_SUNSET,
    ],
    commentCount: 44,
    viewCount: 1385,
    address: "Open desert track, Dubai",
    reviewStart: 4.8,
    reviewCount: 112,
    like: false,
    price: "AED 150",
    listingCategory: AMMAR_TOUR_CATEGORIES[4],
    maxGuests: 1,
    saleOff: null,
    isAds: null,
    map: { lat: 24.8662, lng: 55.5951 },
  },
  {
    id: "ammar-6",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Dhow Cruise Marina Dinner",
    featuredImage: IMAGE_DUBAI_MARINA,
    galleryImgs: [
      IMAGE_DUBAI_MARINA,
      IMAGE_DUBAI_ABRA,
      "https://images.pexels.com/photos/33779636/pexels-photo-33779636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    commentCount: 38,
    viewCount: 960,
    address: "Dubai Marina",
    reviewStart: 4.7,
    reviewCount: 86,
    like: true,
    price: "AED 120",
    listingCategory: AMMAR_TOUR_CATEGORIES[5],
    maxGuests: 8,
    saleOff: null,
    isAds: null,
    map: { lat: 25.0801, lng: 55.1403 },
  },
  {
    id: "ammar-7",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Dubai City Tour",
    featuredImage: IMAGE_DUBAI_BURJ,
    galleryImgs: [
      IMAGE_DUBAI_BURJ,
      IMAGE_DUBAI_SKYLINE,
      "https://images.pexels.com/photos/26770326/pexels-photo-26770326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    commentCount: 53,
    viewCount: 1104,
    address: "Old Dubai to Downtown",
    reviewStart: 4.8,
    reviewCount: 133,
    like: false,
    price: "AED 120",
    listingCategory: AMMAR_TOUR_CATEGORIES[6],
    maxGuests: 12,
    saleOff: null,
    isAds: null,
    map: { lat: 25.2048, lng: 55.2708 },
  },
  {
    id: "ammar-8",
    author: host,
    date: "Mar 14, 2026",
    href: listingHref,
    title: "Abu Dhabi City Tour",
    featuredImage: IMAGE_ABU_DHABI_MOSQUE,
    galleryImgs: [
      IMAGE_ABU_DHABI_MOSQUE,
      "https://images.pexels.com/photos/29622955/pexels-photo-29622955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/34235066/pexels-photo-34235066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    commentCount: 31,
    viewCount: 845,
    address: "Full-day tour from Dubai",
    reviewStart: 4.8,
    reviewCount: 74,
    like: true,
    price: "AED 150",
    listingCategory: AMMAR_TOUR_CATEGORIES[7],
    maxGuests: 12,
    saleOff: null,
    isAds: null,
    map: { lat: 24.4539, lng: 54.3773 },
  },
];

export const AMMAR_HOME_FEATURES: {
  badge: string;
  badgeColor?: TwMainColor;
  title: string;
  description: string;
}[] = [
  {
    badge: "Experience",
    badgeColor: undefined,
    title: "Trusted desert safari specialists",
    description:
      "Ammar Tours focuses on Dubai safaris, buggy rides, cruises, and city tours with guided pickup and organized itineraries.",
  },
  {
    badge: "Service",
    badgeColor: "green",
    title: "Pickup, activities, and camp experiences",
    description:
      "Packages combine dune bashing, camel rides, sandboarding, dinner, and live entertainment depending on the tour you choose.",
  },
  {
    badge: "Support",
    badgeColor: "red",
    title: "Fast booking by call, WhatsApp, or online",
    description:
      "Guests can confirm tours quickly and coordinate meeting points, private options, and group plans with the Ammar Tours team.",
  },
];
