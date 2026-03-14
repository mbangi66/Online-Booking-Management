import { TaxonomyType } from "./types";
import { AMMAR_TOUR_CATEGORIES } from "./ammarTours";

const DEMO_CATEGORIES: TaxonomyType[] = AMMAR_TOUR_CATEGORIES;

const DEMO_TAGS: TaxonomyType[] = AMMAR_TOUR_CATEGORIES.map((item) => ({
  ...item,
  taxonomy: "tag",
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
