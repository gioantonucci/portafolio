import React from "react";
import PI from "../images/PIDOGS.png";
import PG from "../images/PGRGB.png";
import GIOFLIX from "../images/GIOFLIX.png";
import PF from "../images/PORTFOLIO.jpg"
import { FormattedMessage } from "react-intl";

function Projects() {

  


  return (
    <section className="font-Over  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 body-font">
      <div className="conteiner lg:mx-20 px-5 py-24">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold uppercase mb-12 text-teal-50"> <FormattedMessage id="nav.projects" defaultMessage="PROYECTOS" /></h1>
          </div>
        </div>

        <div className="card mb-5 bg-opacity-75 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-fit h-52" src={PI} alt="Proyecto individual" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase"><FormattedMessage
            id="title.dogs" defaultMessage="DOGS APP"/></h2>
            <p>
            <FormattedMessage
            id="description.dogs" defaultMessage="Proyecto individual para Henry Bootcamp. Aplicación de una página que consume una API. Hecha con JS, HTML, CSS, React, Redux."/>
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pi-dogs-gioantonucci.vercel.app/"
              >
                <button className="btn btn-primary uppercase"><FormattedMessage
            id="button.deploy" defaultMessage="DEPLOY"/></button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-52 w-fit" src={PG} alt="Proyecto grupal" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase"><FormattedMessage
            id="title.rgb" defaultMessage="RGB STORE"/></h2>
            <p>
            <FormattedMessage
            id="description.rgb" defaultMessage="Proyecto grupal para Henry Bootcamp. E-commerce de tecnología. Hecha con JS, HTML, Tailwind, React, Redux, NodeMailer, Passportjs, auth0, Nodejs, PostgreeSQL entre otras."/>
            </p>
            <div className="card-actions justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://pg-rgb-store-three.vercel.app/">
                <button className="btn btn-primary"><FormattedMessage
            id="button.deploy" defaultMessage="DEPLOY"/></button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-fit h-52" src={GIOFLIX} alt="Gioflix" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">GIOFLIX</h2>
            <p><FormattedMessage
            id="description.gioflix" defaultMessage="Clon de Netflix. Realizado para practicar tecnologías."/></p>
            <div className="card-actions justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://gioflix.vercel.app/">
                <button className="btn btn-primary"><FormattedMessage
            id="button.deploy" defaultMessage="DEPLOY"/></button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-fit h-52" src={PF} alt="Proyecto grupal" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase"><FormattedMessage
            id="title.portfolio" defaultMessage="PORTFOLIO"/></h2>
            <p>
            <FormattedMessage
            id="description.portfolio" defaultMessage="Página personal dedicada a mostrar proyectos y skills."/>
            </p>
            <div className="card-actions justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://gioantonucci.vercel.app/">
                <button className="btn btn-primary"><FormattedMessage
            id="button.deploy" defaultMessage="DEPLOY"/></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
