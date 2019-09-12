import React, { Component } from 'react';
require('./post.css');

class Post extends Component {
    constructor(props) {
        super(props);
        this.author = 'Dominika';
        //this.title = 'Title';
        this.text = 'abc';
        //this.created_date = '23.04.2019';
        //this.published_date = '23.04.2019';
    };

    render() {
        return (
            <span id='Post'>
                <table>
                    <tr>
                        <p>{this.author}</p>
                    </tr>
                    <tr>
                        <p>{this.text}</p>
                    </tr>
                </table>
            </span>
        );
    }
}

export default Post;