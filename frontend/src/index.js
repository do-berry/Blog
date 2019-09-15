import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Post from './components/post.js';
import 'antd/dist/antd.css';
import PostList from './containers/PostList';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.post = Post
  }

  render() {
    return (
      <body>
        <Header key='header' />
        <Post key='post' />
      </body>
    );
  }
}

ReactDOM.render(<Blog />, document.getElementById('root'));
export default Blog;
