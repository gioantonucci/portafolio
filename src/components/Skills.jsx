import React from "react";
import {
  DiJsBadge,
  DiGithubBadge,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
} from "react-icons/di";
import { SiRedux, SiPostman, SiExpress, SiSequelize } from "react-icons/si";
import { FormattedMessage } from "react-intl";

function Skills() {
  return (
    <section className="h-screen font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
         <div className="lg:w-1/2 lg:mx-20 px-5 py-24 w-full lg:mb-0">
          <h1 className="text-4xl font-bold uppercase text-teal-50"> <FormattedMessage id="nav.skills" defaultMessage="SKILLS" /></h1>
          </div>
          <div className="lg:mx-20 px-5 ">
        <div className="p-6 rounded opacity-75 bg-white">
          <div className="p-4 mx-auto text-center"></div>
          <div className="flex flex-wrap justify-center mx-auto dark:text-gray-400">
            <div className="flex justify-center items-center tooltip tooltip-primary w-1/2 p-6  md:w-1/3 xl:w-1/4" data-tip="Javascript">
              <DiJsBadge className="w-12 hover:text-gray-600 h-12  fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>

            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4"  data-tip="HTML">
              <DiHtml5 className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="CSS">
              <DiCss3 className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="ReactJs">
              <DiReact className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="Redux">
              <SiRedux className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="PostgreSQL">
              <DiPostgresql className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="NodeJs">
              <DiNodejsSmall className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="ExpressJs">
              <SiExpress className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="Sequelize">
              <SiSequelize className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="GitHub">
              <DiGithubBadge className="hover:text-gray-600 w-12 h-12  fill-current  text-gray-400" />
            </div>
            <div className="flex justify-center tooltip tooltip-primary  w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4" data-tip="Postman">
              <SiPostman className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-gray-400"  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
