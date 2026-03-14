import CardCategoryBox1 from "@/components/CardCategoryBox1";
import Heading from "@/shared/Heading";
import { TaxonomyType } from "@/data/types";
import React from "react";

export interface SectionGridCategoryBoxProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  categoryCardType?: "card1";
  className?: string;
  gridClassName?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-experiences",
    name: "Dubai Marina",
    taxonomy: "category",
    count: 18,
    thumbnail:
      "https://images.pexels.com/photos/4624570/pexels-photo-4624570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-experiences",
    name: "Downtown Dubai",
    taxonomy: "category",
    count: 22,
    thumbnail:
      "https://images.pexels.com/photos/34218532/pexels-photo-34218532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-experiences",
    name: "Al Lahbab Desert",
    taxonomy: "category",
    count: 14,
    thumbnail:
      "https://images.pexels.com/photos/16271319/pexels-photo-16271319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-experiences",
    name: "Abu Dhabi",
    taxonomy: "category",
    count: 9,
    thumbnail:
      "https://images.pexels.com/photos/32045630/pexels-photo-32045630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-experiences",
    name: "Old Dubai",
    taxonomy: "category",
    count: 12,
    thumbnail:
      "https://images.pexels.com/photos/35132526/pexels-photo-35132526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-experiences",
    name: "Desert Camps",
    taxonomy: "category",
    count: 11,
    thumbnail:
      "https://images.pexels.com/photos/8003129/pexels-photo-8003129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-experiences",
    name: "Dune Tracks",
    taxonomy: "category",
    count: 8,
    thumbnail:
      "https://images.pexels.com/photos/14585894/pexels-photo-14585894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "8",
    href: "/listing-experiences",
    name: "Creek & Marina",
    taxonomy: "category",
    count: 10,
    thumbnail:
      "https://images.pexels.com/photos/35664165/pexels-photo-35664165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories = DEMO_CATS,
  categoryCardType = "card1",
  headingCenter = true,
  className = "",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}) => {
  let CardComponentName = CardCategoryBox1;
  switch (categoryCardType) {
    case "card1":
      CardComponentName = CardCategoryBox1;
      break;
    default:
      CardComponentName = CardCategoryBox1;
  }

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <Heading
        desc="Discover Dubai and UAE tour areas instead of generic template destinations"
        isCenter={headingCenter}
      >
        Explore nearby
      </Heading>
      <div className={`grid ${gridClassName} gap-5 sm:gap-6 md:gap-8`}>
        {categories.map((item, i) => (
          <CardComponentName key={i} taxonomy={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
