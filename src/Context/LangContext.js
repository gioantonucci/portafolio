import React, { useState } from "react";
import MensajesIngles from "./../Lang/en-US.json";
import MensajesEspañol from "./../Lang/es-ES.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let localeDefault;
  let mensajeDefault;
  const lang = localStorage.getItem("lang");
  if (lang) {
    localeDefault = lang
    if (lang === "es-ES") {
      mensajeDefault = MensajesEspañol;
    } else if (lang === "en-US") {
      mensajeDefault = MensajesIngles;
    } else {
      localeDefault = 'en-US'
      mensajeDefault = MensajesIngles
    }
  }



  const [mensajes, setMensajes] = useState(mensajeDefault);
  const [locale, setLocale] = useState(localeDefault);

  const setLang = (language) => {
    switch (language) {
      case "es-ES":
        setMensajes(MensajesEspañol);
        setLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      case "en-US":
        setMensajes(MensajesIngles);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setMensajes(MensajesEspañol);
        setLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
    }
  };
  return (
    <langContext.Provider value={{ setLang: setLang, locale: locale }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
