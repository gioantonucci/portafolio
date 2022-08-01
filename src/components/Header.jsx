import React from "react";

function Header() {
  return (
    <section className="h-screen flex justify-center items-center font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="container m-2">
        <h2
          className="flex justify-center items-center bg-cover text-7xl bg-clip-text bg-center uppercase text-transparent font-extrabold tracking-wide antialiased"
          style={{
            backgroundImage:
              "url(https://c.tenor.com/z_2DoGAqxpcAAAAC/ocean.gif)",
          }}
        >
          Giovanna Antonucci.
        </h2>
        <h1 className="text-white flex justify-center text-4xl "> {`<Full Stack Developer />`}</h1>
      </div>
    </section>
  );
}

export default Header;
