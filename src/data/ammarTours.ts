import { Route } from "@/routers/types";
import { ExperiencesDataType, TaxonomyType, TwMainColor } from "./types";
import { DEMO_AUTHORS } from "./authors";

const listingHref = "/listing-experiences-detail" as Route<string>;
const archiveHref = "/listing-experiences" as Route<string>;

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
    thumbnail:
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "cat-2",
    name: "Morning Desert Safari",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "cat-3",
    name: "Private Desert Safari",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "cat-4",
    name: "Dune Buggy Dubai",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "cat-5",
    name: "Quad Biking Dubai",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "cat-6",
    name: "Dhow Cruise Marina",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "cat-7",
    name: "Dubai City Tour",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail:
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "cat-8",
    name: "Abu Dhabi City Tour",
    href: archiveHref,
    taxonomy: "category",
    listingType: "experiences",
    count: 1,
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
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
    featuredImage:
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    galleryImgs: [
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
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
    featuredImage:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    galleryImgs: [
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    featuredImage:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    galleryImgs: [
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    featuredImage:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    galleryImgs: [
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    featuredImage:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    galleryImgs: [
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    featuredImage:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    galleryImgs: [
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/326462/pexels-photo-326462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    featuredImage:
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    galleryImgs: [
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/326462/pexels-photo-326462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    featuredImage:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    galleryImgs: [
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
