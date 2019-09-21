import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';
import Post from './components/Post.js';
import BaseRouter from './routes.js';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.post = Post
  }

  render() {
    return (
      <div className="Blog">
        <Router>
          <body>
            <Header />
            <BaseRouter />
          </body>
        </Router>
      </div>
    );
  }
}

//ReactDOM.render(<Blog />, document.getElementById('root'));
export default Blog;
