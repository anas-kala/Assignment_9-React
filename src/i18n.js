import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      welcome: "Welcome to React and react-i18next",
      apple: "There are many apples",
      noApple: "There are no apples",
      personHis: "there are many people in his party",
      personHer: "there are many people in her party",
      noPersonHis: "there are no people in his party",
      noPersonHer: "there are no people in her party",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue à React et react-i18next",
      apple: "Il y a beaucoup de pommes",
      noApple: "Il n'y a pas de pommes",
      personHis: "il y a beaucoup de monde dans son parti",
      personHer: "il y a beaucoup de monde dans son groupe",
      noPersonHis: "il n'y a personne dans son parti",
      noPersonHer: "il n'y a personne dans son groupe",
    },
  },
  de: {
    translation: {
      welcome: "Wellkommen bei React un React-i18next",
      apple: "Es gibt mehrere Äpfel",
      noApple: "There gibt keine Äpfel",
      personHis: "Es gibt mehrere Personen in seiner Party",
      personHer: "Es gibt mehrere Personen in ihrer Party",
      noPersonHis: "Es gibt keine Personen in seiner Party",
      noPersonHer: "Es gibt keine Personen in ihrer Party",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
