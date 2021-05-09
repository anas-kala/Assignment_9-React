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
  const [value, setValue] = useState("female");
  const [number, setNumber] = useState(0);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (props.lang === "French") {
      i18n.changeLanguage("fr-CA");
    } else if (props.lang === "English") {
      i18n.changeLanguage("en-US");
    } else if (props.lang === "German") {
      i18n.changeLanguage("de-DE");
    }
  });

  function getString(str) {
    if (number === 0 || number === "") {
      if (str === "apple") return <p>{t("noApple")}</p>;
      if (value === "male" && str === "person")
        return <p>{t("noPersonHis")}</p>;
      if (value === "female" && str === "person")
        return <p>{t("noPersonHer")}</p>;
    } else if (number > 0) {
      if (str === "apple") return <p>{t("apple")}</p>;
      if (value === "male" && str === "person") return <p>{t("personHis")}</p>;
      if (value === "female" && str === "person")
        return <p>{t("personHer")}</p>;
    }
  }

  console.log(value);
  return (
    <div>
      <Div>
        <Input
          type="numbers"
          placeholder="Enter persons number"
          onChange={(event) => setNumber(event.target.value)}
        />
        <select
          onChange={(event) => setValue(event.target.value)}
          value={value}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </Div>
      <h1>{t("welcome")}</h1>
      <h1>{getString("apple")}</h1>
      <h1>{getString("person")}</h1>
    </div>
  );
};

export default Texts;
