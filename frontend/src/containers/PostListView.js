import React, { Component } from 'react';
import axios from 'axios';

import Post from '../components/Post.js';

class PostList extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return(
            <div>
                {this.state.posts.map((post, id) => {
                    return <Post props={post}/>
                })}
            </div>
        );
    }
}

export default PostList;