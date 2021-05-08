import { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";

const Input = styled.input`
  margin: 15px;
`;

const Div = styled.div`
  width: 80%;
  margin: 0 auto;
  display: inline-block;
`;

const Texts = () => {
  const [value, setValue] = useState('male');

  function handleChange(event) {
    setValue(event.target.value );
  }
  console.log(value);

  return (
    <div>
      <Div>
        <Input type="numbers" placeholder="Enter persons number" />
        <select value={value} onChange={handleChange}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </Div>
      <h1>hallo</h1>
      <h1>goodbye</h1>
      <h1>On other Label</h1>
    </div>
  );
};

export default Texts;
