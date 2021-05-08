import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: 'numbers' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    console.log(this.state.activeItem);
    return (
      <Menu size='massive'>
        <Menu.Item
          name='numbers'
          active={activeItem === 'numbers'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='dates'
          active={activeItem === 'dates'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='texts'
          active={activeItem === 'texts'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Menu.Menu>
      </Menu>
    )
  }
}
