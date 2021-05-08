import React, { useState } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("Numbers");
  const [language, setLanguage] = useState("English");

  React.useEffect(() => {
    const dataActiveItem = localStorage.getItem("myActiveItem");
    const dataLanguage = localStorage.getItem("myLanguage");
    if (dataActiveItem !== null && dataLanguage !== null) {
      setActiveItem(JSON.parse(dataActiveItem));
      setLanguage(JSON.parse(dataLanguage));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("myActiveItem", JSON.stringify(activeItem));
    localStorage.setItem("myLanguage", JSON.stringify(language));
  });

  
  console.log(language);
  console.log(activeItem);
  return (
    <Menu size="massive">
      <Menu.Item
        name="numbers"
        active={activeItem === "numbers"}
        onClick={() => setActiveItem("Numebrs")}
      />
      <Menu.Item
        name="dates"
        active={activeItem === "dates"}
        onClick={() => setActiveItem("Dates")}
      />
      <Menu.Item
        name="texts"
        active={activeItem === "texts"}
        onClick={() => setActiveItem("Texts")}
      />

      <Menu.Menu position="right">
        <Dropdown item text={language}>
          <Dropdown.Menu>
            <Dropdown.Item
              name="English"
              active={language === "english"}
              onClick={() => setLanguage("English")}
            >
              English
            </Dropdown.Item>
            <Dropdown.Item
              name="Russian"
              active={language === "russian"}
              onClick={() => setLanguage("Russian")}
            >
              Russian
            </Dropdown.Item>
            <Dropdown.Item
              name="Spanish"
              active={language === "spanish"}
              onClick={() => setLanguage("Spanish")}
            >
              Spanish
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default NavigationBar;
