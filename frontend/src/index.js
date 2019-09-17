import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header.js';
<<<<<<< Updated upstream
import Post from './components/post.js';
import 'antd/dist/antd.css';
import PostList from './containers/PostList';
=======
import Post from './post.js';
import BaseRouter from './routes.js';
>>>>>>> Stashed changes

class Blog extends Component {
  constructor(props) {
    super(props);
    this.post = Post
  }

  render() {
    return (
      <div className="App">
        <Router>
        <body>
          <Header key='header' />
          <BaseRouter />
        </body>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Blog />, document.getElementById('root'));
export default Blog;
