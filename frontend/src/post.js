import React, { Component } from 'react';
require('./post.css');

function ShowDetails(props) {
  if (props.published) {
    return(
      <h3>Author: {props.author}, created: {props.created}, published: {props.published}</h3>
    );
  }
  return(
    <h3>Author: {props.author}, created: {props.created}</h3>
  );
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
          author: 'Dominika',
          title: 'Taki piekny tytul ze szog',
          text: 'Jakis tam se tekst jest elo',
          created: '23.04.2019',
          published: '23.04.2019',
        };
    };

    render() {
        return (
            <div id='Post'>
                <table>
                    <thead>
                        <th id='PostHeader'>
                        <div id='PostTitle'>
                          <a href='Post'><h1>{ this.state.title }</h1></a>
                        </div>
                        <div id='PostAuthorDate'>
                            <ShowDetails author={ this.state.author}
                              created={this.state.created}
                              published={this.state.published}
                            />
                          </div>
                        </th>
                    </thead>
                    <tbody>
                    <tr>
                        <div id='PostText'>
                          <p>{ this.state.text }</p>
                        </div>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Post;
