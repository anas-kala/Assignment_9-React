import React from "react";
import { Dropdown } from "semantic-ui-react";
import styled from 'styled-components';

const Input=styled.input`
  margin: 15px;
`;

const Div=styled.div`
width: 80%;
margin: 0 auto;
padding: 20px;
background: #f0e68c;
display: inline-block;
`;
const options = [
  { key: 1, text: "Male", value: 1 },
  { key: 2, text: "Female", value: 2 },
];

const Texts = () => {
  return (
    <div>
      <Div>
        <Input type="numbers" placeholder="Enter persons number" />
        <Dropdown clearable options={options} selection />
      </Div>
      <h1>hallo</h1>
      <h1>goodbye</h1>
      <h1>On other Label</h1>
    </div>
  );
};

export default Texts;
