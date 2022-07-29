import React, { useState } from "react";
import MensajesIngles from "./../Lang/en-US.json";
import MensajesEspañol from "./../Lang/es-ES.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState("MensajesEspañol");
  const [locale, setLocale] = useState("es-ES");

  const setLang = (language) => {
    switch (language) {
      case "es-ES":
        setMensajes(MensajesEspañol);
        setLocale("es-ES");
        break;
      case "en-US":
        setMensajes(MensajesIngles);
        setLocale("en-US");
        break;
      default:
        setMensajes(MensajesEspañol);
        setLocale("es-ES");
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

export { LangProvider, langContext};
