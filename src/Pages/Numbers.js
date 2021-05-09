import React, { useEffect, useState } from "react";
import { FormattedDate, FormattedNumber, IntlProvider } from "react-intl";
import { FormTextArea } from "semantic-ui-react";

const Numbers = (props) => {
  const [number, setNumber] = useState(1);
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
    const dataNumber = localStorage.getItem("myNumber");
    if (dataNumber !== null) {
      setNumber(JSON.parse(dataNumber));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("myNumber", JSON.stringify(number));
  });

  return (
    <div>
      <input
        type="numbers"
        placeholder="Enter the number here"
        onChange={(event) => setNumber(event.target.value)}
      />
      <IntlProvider locale={language}>
        <h1>
          <FormattedNumber style="unit" unit="kilobyte" value={number} />
        </h1>
        <h1>
          <FormattedNumber currency="EUR" style="currency" value={number} />
        </h1>
        <h1>
          <FormattedNumber
            currency="EUR"
            minimumFractionDigits={5}
            style="currency"
            value={number}
          />
        </h1>
        <h1>Date: <FormattedDate value={new Date()} /></h1>
      </IntlProvider>
    </div>
  );
};

export default Numbers;
