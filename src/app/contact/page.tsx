import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { AMMAR_TOURS_CONTACT } from "@/data/ammarTours";

export interface PageContactProps {}

const info = [
  {
    title: "Address",
    desc: AMMAR_TOURS_CONTACT.location,
  },
  {
    title: "Email",
    desc: AMMAR_TOURS_CONTACT.email,
  },
  {
    title: "Phone",
    desc: AMMAR_TOURS_CONTACT.phone,
  },
];

const PageContact: FC<PageContactProps> = ({}) => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact Ammar Tours
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  Socials
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Full name</Label>
                  <Input placeholder="Your name" type="text" className="mt-1" />
                </label>
                <label className="block">
                  <Label>Email address</Label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>
                  <Textarea
                    className="mt-1"
                    rows={6}
                    placeholder="Tell us which tour you want to book."
                  />
                </label>
                <div>
                  <ButtonPrimary type="submit">Send inquiry</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <SectionSubscribe2 className="pb-24 lg:pb-32" />
      </div>
    </div>
  );
};

export default PageContact;
