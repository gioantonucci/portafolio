import React from "react";
import emailjs from '@emailjs/browser';

function validate(input) {
  let errors = {};


  if (!input.name || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)){
    errors.name = "The first letter must be uppercase";
} else {
  errors.name = "Done!"
}

return errors
}

function Contact() {
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_5sxmgy9","template_20k59r4", e.target,'G0qwOBeBIPLA6LlsE')
    .then(response => console.log(response))
    .catch(error => console.log(error))
 
  }
  
  return (
    <section className="font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-gray-600 body-font relative">
      <div className="container font-Over px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="font-Over text-3xl font-bold text-gray-800 dark:text-gray-100">
            CONTACTO
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <form id="form " className="form-mail lg:w-1/2 md:w-2/3 mx-auto"  onSubmit={sendEmail}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Tu nombre</span>
                </label>
                <input
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre..."
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Tu mail</span>
                </label>
                <input
                  name="mail"
                  type="text"
                  placeholder="Tu mail..."
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="label" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  placeholder="Tu mensaje ♥"
                  id=""
                  name="mensaje"
                  className="w-full textarea textarea-primary"
                  required
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button type="submit" className="flex mx-auto btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
