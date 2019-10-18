import React, { Component } from 'react';
import axios from 'axios';

import { Card } from 'antd';
import Post from '../components/Post.js';

class PostDetail extends Component {
    state = {
        post: {},
    }

    componentDidMount() {
        const postID = this.props.match.params.postID; // we grab the ID from the URL
        axios.get('http://127.0.0.1:8000/api/post/' + postID)
            .then(res => {
                this.setState({
                    post: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return(
            <Post props={this.state.post}/>
        );
    }
}

export default PostDetail;