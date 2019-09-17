import React, { Component } from 'react';
<<<<<<< Updated upstream:frontend/src/components/post.js
require('../post.css');
=======
import { List } from "antd";
import './post.css';
>>>>>>> Stashed changes:frontend/src/post.js

const Post = props => {
  return (
    <List
      dataSource={props.data}
      renderItem={item => (
        <div key={item.title}
          id='Post'>
          <table>
            <thead>
              <th id='PostHeader'>
                <a href={'/post/'+ item.id}>
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
// class Post extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           author: 'Dominika',
//           title: 'Taki piekny tytul ze szog',
//           text: 'Jakis tam se tekst jest elo',
//           created: '23.04.2019',
//           published: '23.04.2019',
//         };
//     };

//     render() {
//         return (
//             <div id='Post'>
//                 <table>
//                     <thead>
//                         <th id='PostHeader'>
//                         <div id='PostTitle'>
//                           <a href='Post'><h1>{ this.state.title }</h1></a>
//                         </div>
//                         <div id='PostAuthorDate'>
//                             <ShowDetails author={ this.state.author}
//                               created={this.state.created}
//                               published={this.state.published}
//                             />
//                           </div>
//                         </th>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <div id='PostText'>
//                           <p>{ this.state.text }</p>
//                         </div>
//                     </tr>
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

export default Post;
