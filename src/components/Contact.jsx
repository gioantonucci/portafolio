import React from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


function Contact() {


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_5sxmgy9","template_20k59r4", e.target,'G0qwOBeBIPLA6LlsE')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    Swal.fire({
      title: 'Gracias!',
      text: 'Tu mensaje fue enviado con exito ♥',
      icon: 'success',
      confirmButtonText: 'Ok!'
    })
  }
  
  return (
    <section className="font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-gray-600">
      <div className="container font-Over px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
        <h1 className="text-4xl font-bold mb-12 text-teal-50">CONTACTO</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <form id="form" className="form-mail lg:w-1/2 md:w-2/3 mx-auto"  onSubmit={sendEmail}>
          <div className="flex flex-wrap -m-2">
            <div className="w-6/12">
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
            <div className=" w-6/12">
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
