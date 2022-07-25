import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  

  return (
    <div className="navbar font-Over bg-base-100">
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
                Sobre Mi
              </Link>
            </li>
            <li tabIndex="0" className="nav-item">
              <Link to="skills" spy={true} smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li tabIndex="0" className="nav-item">
              <Link to="projects" spy={true} smooth={true} duration={500}>
                Proyectos
              </Link>
            </li>
            <li tabIndex="0" className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contacto
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
              Sobre Mi
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
              Skills
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
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn">Descargar CV</button>
      </div>
    </div>
  );
}

export default NavBar;
