import React, { Component } from 'react';
require('./post.css');

function ShowDetails(props) {
  const published_date = props.published_date;
  const created_date = props.created_date;
  const author = props.author;

  if (published_date) {
    return(
      <h3>Author: {author}, created: {created_date}, published: {published_date}</h3>
    );
  }
  return(
    <h3>Author: {author}, created: {created_date}</h3>
  );
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
          author: 'Dominika',
          title: 'Taki piekny tytul ze szog',
          text: 'Jakis tam se tekst jest elo',
          created_date: '23.04.2019',
          published_date: '23.04.2019',
        }
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
                              created={this.state.created_date}
                              published={this.state.published_date}
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
