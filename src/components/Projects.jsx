import React from "react";
import PI from '../images/PIDOGS.png'
import PG from '../images/PGRGB.png'
import GIOFLIX from '../images/GIOFLIX.png'



function Projects() {
  return (
    <section className="text-gray-600 font-Over  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              PROYECTOS
            </h2>
          </div>
        </div>
 
          <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure>
              <img className="w-52 h-72 " src={PI} alt="Proyecto individual" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">DOGS APP</h2>
              <p>Proyectyo indiviudal para Henry Bootcamp. Single Page App que consume una API.</p>
              <div className="card-actions justify-end">
              <a target="_blank" href='https://pi-dogs-gioantonucci.vercel.app/'>
                <button className="btn btn-primary">LINK AL DEPLOY</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure>
            <img className="w-52 h-72 " src={PG} alt="Proyecto grupal" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">RGB STORE</h2>
              <p>Proyecto grupal para Henry Bootcamp. E-commerce de tecnología.</p>
              <div className="card-actions justify-end">
              <a target="_blank" href='https://pg-rgb-store-three.vercel.app/'>
                <button className="btn btn-primary">LINK AL DEPLOY</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure>
            <img className="w-52 h-72 " src={GIOFLIX} alt="Gioflix" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">GIOFLIX</h2>
              <p>Clon de Netflix.</p>
              <div className="card-actions justify-end">
                <a target="_blank" href='https://gioflix.vercel.app/'>
                <button className="btn btn-primary">LINK AL DEPLOY</button>
                </a>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default Projects;
