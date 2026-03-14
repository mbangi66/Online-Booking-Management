import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import { AMMAR_TOUR_LISTINGS } from "@/data/ammarTours";

const featuredTour = AMMAR_TOUR_LISTINGS[0];

export const PHOTOS: string[] = featuredTour.galleryImgs.map((item) =>
  String(item)
);

export const includes_demo = [
  { name: "Hotel pickup and drop-off in Dubai" },
  { name: "Dune bashing in the red dunes" },
  { name: "Camel ride and sandboarding" },
  { name: "Camp access with refreshments" },
  { name: "BBQ dinner and live entertainment on evening tours" },
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
  (item, index): ListingGalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);
