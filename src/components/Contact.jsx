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
    <section className="h-screen font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
    <div className="px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold lg:ml-20 text-white">CONTACTO</h1>
        </div>
        
  <div className="container px-5 py-5 ">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 mx-auto w-full mt-10 md:mt-0 shadow-md">
      <p className="leading-relaxed mb-5 text-gray-600">Cualquier duda, feedback o propuesta, podes hacerla desde acá ♥</p>
      <form onSubmit={sendEmail}>
      <div className="relative mb-4">
        <label className="label-text">Tu nombre</label>
              <input name="nombre"
                  type="text"
                  placeholder="Tu nombre..."
                  className="input lg:ml-2 input-bordered w-full max-w-xs"
                  required></input>
      </div>
      <div className="relative mb-4">
        <label className="label-text">Tu mail</label>
        <input
         name="mail"
         type="text"
         placeholder="Tu mail..."
         className="input input-bordered lg:ml-2 w-full max-w-xs"
         required></input>
      </div>
      <div className="relative mb-4">
        <label className="label-text" htmlFor="message">Tu mensaje</label>
              <textarea
              placeholder="Tu mensaje ♥"
              id=""
              name="mensaje"
              className="w-full textarea textarea-primary"
              required></textarea>
      </div>
      <button type="submit" className="flex mx-auto btn btn-primary">
        Enviar
    </button>
</form>
    </div>
  </div>
</section>
  );
}

export default Contact;
