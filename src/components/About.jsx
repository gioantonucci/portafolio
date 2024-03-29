import React, {useContext} from "react";
import { FormattedMessage } from "react-intl";
import Gio from "../images/Gio.png";
import pdfes from "../Utils/Giovanna_Antonucci-Desarrolladora_web_JR.pdf";
import pdfen from "../Utils/Giovanna_Antonucci-Junior_Web_Developer.pdf";
import { langContext } from "../Context/LangContext";

function About() {

  const lang = useContext(langContext)

  return (
    <section className="z-auto hero min-h-screen font-Rubik bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
     <div className="hero-content flex-col lg:flex-row ">
        <div >
          <h1 className="text-4xl font-bold mb-10 uppercase text-white">
            <FormattedMessage
          id="about.title"
          defaultMessage="SOBRE MI"
          /></h1>
          <div></div>
          <img src={Gio} alt="Just me" className="max-w-xs rounded-lg shadow-2xl" />
          <p className="py-10">
          <FormattedMessage
          id="about.about"
          defaultMessage="¡Hola! Mi nombre es Giovanna y soy desarrolladora web. Actualmente me encuentro formándome en diseño UX, ya que creo que es fundamental para crear productos digitales que sean atractivos y fáciles de usar. Soy una persona muy versátil y me adapto rápidamente a cualquier situación. Estoy siempre dispuesta a aprender nuevas tecnologías si es necesario para algún proyecto. Además de mi carrera como desarrolladora, también tengo un emprendimiento que me ha enseñado a ser muy organizada y he desarrollado habilidades de comunicación y atención al cliente, así como la capacidad de gestionar múltiples tareas y responsabilidades. También soy hábil en la resolución de problemas y la toma de decisiones, y tengo un ojo agudo para el detalle."
          />
            
          </p>
          <div className="flex items-center mt-6 -mx-2">
            <a
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/giovanna-antonucci/"
              aria-label="Linkden"
            >
              <svg
                className="w-10 h-10 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
              </svg>
            </a>

            <a
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gioantonucci"
              aria-label="Github"
            >
              <svg
                className="w-10 h-10 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </a>
            <button className="btn">
              <a
                href={lang.locale  === 'en-US' ? pdfen : pdfes}
                target="_blank"
                rel="noopener noreferrer"
                download="GIOVANNA_ANTONUCCI_CV_FULLSTACKWEB"
              >
                  <FormattedMessage
          id="about.button"
          defaultMessage="Descargar CV"
          />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
 
  );
}

export default About;
