import React, { useState } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import Dates from "../Pages/Dates";
import Numbers from "../Pages/Numbers";
import Texts from "../Pages/Texts";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
    <div>
      <Router>
        <Menu size="massive">
          <Menu.Item
            name="numbers"
            active={activeItem === "numbers"}
            onClick={() => setActiveItem("Numebrs")}
          >
            <Link to="/Numbers">Numbers</Link>
          </Menu.Item>
          <Menu.Item
            name="dates"
            active={activeItem === "dates"}
            onClick={() => setActiveItem("Dates")}
          >
            <Link to="/Dates">Dates</Link>
          </Menu.Item>
          <Menu.Item
            name="texts"
            active={activeItem === "texts"}
            onClick={() => setActiveItem("Texts")}
          >
            <Link to="/Texts">Texts</Link>
          </Menu.Item>
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
                  name="German"
                  active={language === "german"}
                  onClick={() => setLanguage("German")}
                >
                  German
                </Dropdown.Item>
                <Dropdown.Item
                  name="French"
                  active={language === "french"}
                  onClick={() => setLanguage("French")}
                >
                  French
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>

        <Switch>
          <Route path="/Numbers">
            <Numbers />
          </Route>
          <Route path="/Texts">
            <Texts lang={language} />
          </Route>
          <Route path="/Dates">
            <Dates />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavigationBar;
