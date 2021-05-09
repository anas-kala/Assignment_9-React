import React, { useEffect, useState } from "react";
import { FormattedDate, FormattedNumber, IntlProvider } from "react-intl";
const Dates = (props) => {
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (props.lang === "French") {
      setLanguage("fr");
    } else if (props.lang === "English") {
      setLanguage("en");
    } else if (props.lang === "German") {
      setLanguage("de");
    }
  });

  React.useEffect(() => {
    const dataDate = localStorage.getItem("myDate");
    if (dataDate !== null) {
      setDate(JSON.parse(dataDate));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("myDate", JSON.stringify(date));
  });

  return (
    <div>
      <input
        type="date"
        placeholder="Choose a date"
        onChange={(event) => setDate(event.target.value)}
        value={date}
      />
      <IntlProvider locale={language}>
        <h1>
          <FormattedDate value={date} />
        </h1>
      </IntlProvider>
    </div>
  );
};

export default Dates;
