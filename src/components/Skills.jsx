import React from "react";
import {
  DiJsBadge,
  DiGithubBadge,
  DiDatabase,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
} from "react-icons/di";
import { SiRedux, SiPostman, SiSequelize } from "react-icons/si";
import { FormattedMessage } from "react-intl";

function Skills() {
  return (
    <section className="font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className=" p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <div className="px-5 py-24 mx-auto">
          <h1 className="text-4xl font-bold lg:ml-20 uppercase text-white">
            <FormattedMessage id="nav.skills" defaultMessage="SKILLS" />
          </h1>
        </div>
        <div className="flex flex-wrap container rounded opacity-75 p-10 bg-white justify-center lg:justify-between">
          <DiJsBadge className="w-12 hover:text-gray-600 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <DiHtml5 className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <DiCss3 className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <DiReact className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <SiRedux className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <DiPostgresql className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <DiNodejsSmall className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <DiDatabase className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <DiGithubBadge className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <SiSequelize className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
          <SiPostman className="hover:text-gray-600 w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-400" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
