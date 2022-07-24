import React from "react";

function Contact() {
  return (
    <section className="font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-gray-600 body-font relative">
      <div className="container font-Over px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="font-Over text-3xl font-bold text-gray-800 dark:text-gray-100">
            QUERÉS HABLAR CONMIGO? HACELO ACÁ!
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Tu nombre</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre..."
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
            <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Tu mail</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu mail..."
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className='label'
                  for="message"
                >
                  Mensaje
                </label>
                <textarea
                  placeholder="Tu mensaje ♥"
                  id="message"
                  name="message"
                  className="w-full textarea textarea-primary"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
