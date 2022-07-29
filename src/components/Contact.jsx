import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FormattedMessage } from "react-intl";
import { langContext } from "../Context/LangContext";

function Contact() {
  const lang = useContext(langContext);
  console.log(lang.locale);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5sxmgy9",
        "template_20k59r4",
        e.target,
        "G0qwOBeBIPLA6LlsE"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    Swal.fire({
      title: `${lang.locale === "es-ES" ? "Gracias!" : "Thank you!"}`,
      text: `${
        lang.locale === "es-ES"
          ? "Tu mensaje fue enviado con exito ♥"
          : "Your message was successfully sent ♥"
      }`,
      icon: "success",
      confirmButtonText: "Ok!",
    });
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <section className="z-50 font-Over bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold uppercase lg:ml-20 text-white">
          <FormattedMessage id="title.contact" defaultMessage="CONTACTO" />
        </h1>
      </div>

      <div className="container px-5 py-5 ">
        <div className="lg:w-1/3 md:w-1/2 bg-opacity-75 bg-white rounded-lg p-8 mx-auto w-full mt-10 md:mt-0 shadow-md">
          <p className="leading-relaxed mb-5 text-gray-600">
            <FormattedMessage
              id="contact"
              defaultMessage="Cualquier duda, devolución o propuesta podés hacerla desde acá 💜"
            />
          </p>
          <form onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label className="label-text">
                <FormattedMessage id="label.name" defaultMessage="Tu nombre" />
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="nombre"
                type="text"
                placeholder={
                  lang.locale === "es-ES" ? "Tu nombre..." : "Your name..."
                }
                className="input lg:ml-2 input-bordered w-full max-w-xs"
                required
              ></input>
            </div>
            <div className="relative mb-4">
              <label className="label-text">
                <FormattedMessage id="label.mail" defaultMessage="Tu mail" />
              </label>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                name="mail"
                type="email"
                placeholder={
                  lang.locale === "es-ES" ? "Tu mail..." : "Your email..."
                }
                className="input input-bordered lg:ml-2 w-full max-w-xs"
                required
              ></input>
            </div>
            <div className="relative mb-4">
              <label className="label-text" htmlFor="message">
                <FormattedMessage
                  id="label.message"
                  defaultMessage="Tu mensaje 💜"
                />
              </label>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang.locale === "es-ES" ? "Tu mensaje..." : "Your message..."
                }
                id=""
                name="mensaje"
                className="w-full h-52 resize-none textarea textarea-primary"
                required
              ></textarea>
            </div>
            <button type="submit" className="flex mx-auto btn btn-primary">
              <FormattedMessage id="button.contact" defaultMessage="Enviar" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
