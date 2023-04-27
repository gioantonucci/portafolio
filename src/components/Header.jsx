import React from "react";

function Header() {
  return (
    <section className="h-screen font-Rubik flex justify-center items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
     <div className="container">
      <div className="grid place-items-center">
        <h2
          className=" bg-cover xl:text-7xl sm:text-4xl bg-clip-text bg-center uppercase text-transparent font-extrabold tracking-wide antialiased"
          style={{
            backgroundImage:
              "url(https://c.tenor.com/z_2DoGAqxpcAAAAC/ocean.gif)",
          }}
        >
          Giovanna Antonucci.
        </h2>
        <h1 className="text-white flex justify-center lg:text-4xl "> {`<Desarrolladora Web />`}</h1>
      </div></div>
    </section>
  );
}

export default Header;
