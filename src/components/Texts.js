import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "Male", value: 1 },
  { key: 2, text: "Female", value: 2 },
];

const Texts = () => {
  return (
    <div>
      <div>
        <input type="numbers" placeholder="Enter persons number" />
        <Dropdown clearable options={options} selection />
      </div>
      <h1>hallo</h1>
      <h1>goodbye</h1>
      <h1>On other Label</h1>
    </div>
  );
};

export default Texts;
