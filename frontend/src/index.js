import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js'

class Blog extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Header></Header>
    );
  }
}

ReactDOM.render(<Blog/>, document.getElementById('root'))
export default Blog;
