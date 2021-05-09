import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Input = styled.input`
  margin: 15px;
`;

const Div = styled.div`
  width: 80%;
  margin: 0 auto;
  display: inline-block;
`;

const Texts = (props) => {
  const [value, setValue] = useState("male");
  const [number, setNumber]=useState(1);

  function handleChange(event) {
    setValue(event.target.value);
  }
  console.log(value);
  const { t, i18n } = useTranslation();
 

  useEffect(() => {
    if (props.lang === "French") {
      i18n.changeLanguage("fr-CA");
    } else if (props.lang === "English") {
      i18n.changeLanguage("en-US");
    }
    else if (props.lang === "German") {
      i18n.changeLanguage("de-DE");
    }
  });

  return (
    <div>
      <Div>
        <Input type="numbers" placeholder="Enter persons number" onChange={event => setNumber(event.target.value)}  />
        <select value={value} onChange={handleChange}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </Div>
      <h1>{t("Welcome to React")}</h1>
      <h1>{t("a")}</h1>
      <h1>{t("b")}</h1>
    </div>
  );
};

export default Texts;
