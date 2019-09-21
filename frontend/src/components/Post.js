import React, { Component } from 'react';
import { List } from "antd";
import '../static/Post.css';

const Post = props => {
  return (
    <List
      dataSource={props.data}
      renderItem={item => (
        <div key={item.id}
          id='Post'>
          <table>
            <thead>
              <th id='PostHeader'>
                <a href={'/posts/' + item.id}>
                  <h1>{item.title}</h1>
                </a>
                <h3>Author: {item.author},
                    created: {item.created_date},
                    published: {item.published_date}
                </h3>
              </th>
            </thead>
            <tbody>
              <tr>
                <div id='PostText'>
                  <p>{item.text}</p>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    />
  );
}

export default Post;
