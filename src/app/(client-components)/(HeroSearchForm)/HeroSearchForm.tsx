"use client";

import React, { FC } from "react";
import ExperiencesSearchForm from "./(experiences-search-form)/ExperiencesSearchForm";

export type SearchTab = "Experiences";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Experiences";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className} lg:px-6`}
    >
      <ExperiencesSearchForm />
    </div>
  );
};

export default HeroSearchForm;
