import __experiencesTaxonomies from "./jsons/__experiencesTaxonomies.json";
import { TaxonomyType } from "./types";
import { Route } from "@/routers/types";
import { AMMAR_TOUR_CATEGORIES } from "./ammarTours";

const DEMO_CATEGORIES: TaxonomyType[] = __experiencesTaxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  href: item.href as Route,
}));

const DEMO_TAGS: TaxonomyType[] = __experiencesTaxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
  href: item.href as Route,
}));

//

const DEMO_STAY_CATEGORIES: TaxonomyType[] = [];
//
const DEMO_EXPERIENCES_CATEGORIES: TaxonomyType[] = AMMAR_TOUR_CATEGORIES;

export {
  DEMO_CATEGORIES,
  DEMO_TAGS,
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
};
