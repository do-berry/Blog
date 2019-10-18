import React from 'react';
import '../static/Post.css';

const Post = ({ props }) => {
  return (
    <table key={props.id} class='Post'>
      <tr>
        <th class='PostHeader'>
          <h2 id='PostTitle'><a href={'/post/' + props.id}>{props.title}</a></h2>
          <h3 id='PostDetails'>
            author: {props.author} /
            created:{props.created_date} /
            published: {props.published_date}
          </h3>
        </th>
      </tr>
      <tr>
        <td>
          <p id='PostText'>{props.text}</p>
        </td>
      </tr>
    </table>
  );
}

export default Post;
