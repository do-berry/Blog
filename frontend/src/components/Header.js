import React, { Component } from 'react'
import '../static/Header.css';
import MenuList from './Menu.js';


class Header extends Component {
  constructor(props) {
    super(props);
    this.title = 'Hello, World!';
    this.menu = ['Posts', 'About'];
  }

  render() {
    return (
      <div class="page-header">
        <h1>
          <a href="/">{ this.title }</a>
        </h1>
        <MenuList menu={ this.menu }/>
      </div>
    );
  }
}

export default Header;
