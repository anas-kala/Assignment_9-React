import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "there is": "there is",
      "there are": "there are",
      "apple":"apple",
      "apples":"apples",
      "person": "person in his party",
      "persons": "persons in his party",
      "a":"there is one person in the party",
      "b":"there is one apple",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "there is": "il y a ",
      "there are": "il y a ",
      "apple":"pomme",
      "apples":"pommes",
      "person": "personne dans son parti",
      "persons": "personnes de son parti",
      "a":"il y a une personne dans le groupe",
      "b":"il y a une pomme",
    },
  },
  de: {
    translation: {
      "Welcome to React": "Wellkommen bei React un React-i18next",
      "there is": "es gibt",
      "there are": "es sind",
      "apple":"Apfel",
      "apples":"Äpfel",
      "person": "Person in der Party",
      "persons": "Personen in der Party",
      "a":"es gibt eine Person in der Party",
      "b":"es gibt ein Apfel",
    },
  }
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
