import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: "numbers", language: "English" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleLanguageClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state.activeItem;
    const { language } = this.state.language;

    console.log(this.state.activeItem);
    return (
      <Menu size="massive">
        <Menu.Item
          name="numbers"
          active={activeItem === "numbers"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="dates"
          active={activeItem === "dates"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="texts"
          active={activeItem === "texts"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Dropdown item text={this.state.language}>
            <Dropdown.Menu>
              <Dropdown.Item
                name="English"
                active={language === "english"}
                onClick={this.handleLanguageClick}
              >
                English
              </Dropdown.Item>
              <Dropdown.Item
                name="Russian"
                active={language === "russian"}
                onClick={this.handleLanguageClick}
              >
                Russian
              </Dropdown.Item>
              <Dropdown.Item
                name="Spanish"
                active={language === "spanish"}
                onClick={this.handleLanguageClick}
              >
                Spanish
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}
