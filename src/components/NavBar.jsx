import { Link } from "react-scroll";
import { TbLanguage } from "react-icons/tb";
import pdfes from "../Utils/Giovanna_Antonucci-FullStack-ES.pdf";
import pdfen from "../Utils/Giovanna_Antonucci-FullStack-EN.pdf";
import { React, useContext, useEffect, useState } from "react";
import { langContext } from "../Context/LangContext";
import { FormattedMessage } from "react-intl";
import Loading from "../components/Loading.css";

function NavBar() {
  const lang = useContext(langContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

    
  return (
    <div className="navbar sticky top-0 z-50 font-Over bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li tabIndex="0" className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={500}>
                <FormattedMessage id="nav.about" defaultMessage="Sobre mi" />
              </Link>
            </li>
            <li tabIndex="0" className="nav-item">
              <Link to="skills" spy={true} smooth={true} duration={500}>
                <FormattedMessage
                  id="nav.skills"
                  defaultMessage="Habilidades"
                />
              </Link>
            </li>
            <li tabIndex="0" className="nav-item">
              <Link to="projects" spy={true} smooth={true} duration={500}>
                <FormattedMessage
                  id="nav.projects"
                  defaultMessage="Proyectos"
                />
              </Link>
            </li>
            <li tabIndex="0" className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <FormattedMessage id="nav.contact" defaultMessage="Contacto" />
              </Link>
            </li>
          </ul>
        </div>
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button className="btn btn-ghost normal-case text-xl">G/A</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FormattedMessage id="nav.about" defaultMessage="Sobre mi" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FormattedMessage id="nav.skills" defaultMessage="Habilidades" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FormattedMessage id="nav.projects" defaultMessage="Proyectos" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FormattedMessage id="nav.contact" defaultMessage="Contacto" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu mr-5 menu-horizontal p-0">
          <li tabIndex="0">
            <div href="Language">
              <TbLanguage className="w-full h-full" />
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </div>
            <ul className="p-2 bg-white">
              <li className="nav-item" onClick={() => lang.setLang("en-US")}>
                <a href="Ingles">
                  <FormattedMessage id="button.en" defaultMessage="Inglés" />
                </a>
              </li>

              <li className="nav-item" onClick={() => lang.setLang("es-ES")}>
                <a href="Español">
                  <FormattedMessage id="button.es" defaultMessage="Español" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <button className="btn">
          <a
            href={lang.locale === "en-US" ? pdfen : pdfes}
            target="_blank"
            rel="noopener noreferrer"
            download="GIOVANNA_ANTONUCCI_CV_FULLSTACKWEB"
          >
            <FormattedMessage id="about.button" defaultMessage="Descargar CV" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
