import React from "react";

function Skills() {
  return (
    <section className="text-gray-600 hero min-h-screen font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className=" px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-teal-50">SKILLS</h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-fit">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Front End
              </h1>
              <div className="flex justify-around">
                <img
                  alt="HTML"
                  src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                />
                <img
                  alt="CSS"
                  src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                />
                <img
                  alt="JAVASCRIPT"
                  src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                />
                <img
                  alt="REACT"
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                />
                <img
                  className="w-12 h-12"
                  alt="REDUX"
                  src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
                ></img>
                <img
                  alt="TAILWIND"
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                ></img>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-fit">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Back end
              </h1>
              <div className="flex justify-around">
                <img
                  alt="POSTGREESQL"
                  src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                />

                <img
                  alt="SEQUELIZE"
                  src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"
                />
                <img
                  alt="NODEJS"
                  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                />
                <img
                  alt="express"
                  src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                ></img>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-fit">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Other
              </h1>
              <div className="flex justify-around">
                <img
                  alt="AI"
                  src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
                />
                <img
                  alt="FIGMA"
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                />
                <img
                  alt="POSTMAN"
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                />
                <img
                  alt="GIT"
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
