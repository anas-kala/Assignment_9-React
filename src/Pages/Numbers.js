import React from "react";
import { FormattedDate, FormattedNumber, IntlProvider } from "react-intl";
import { FormTextArea } from "semantic-ui-react";

const Numbers = () => {
  return (
    <div>
      <IntlProvider locale="de">
        <FormattedNumber value={1000.95} />
        <FormattedNumber style="unit" unit="kilobyte" value={1000.95} />
        <FormattedNumber currency="EUR" style="currency" value={1000.95} />
        <FormattedNumber
          currency="EUR"
          minimumFractionDigits={5}
          style="currency"
          value={1000.95}
        />
        <FormattedDate value={new Date()} />
      </IntlProvider>
      <input type="numbers" placeholder="Enter the number here" />
      <h1>hallo</h1>
      <h1>goodbye</h1>
      <h1>On other Label</h1>
    </div>
  );
};

export default Numbers;
