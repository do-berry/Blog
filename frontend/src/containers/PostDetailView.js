import React, { Component } from 'react';
import axios from 'axios';

import { Card } from 'antd';
import Post from '../components/Post.js';

class PostDetail extends Component {
    state = {
        post: {},
    }

    componentDidMount() {
        const postID = this.props.match.params.id;
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
            <Card title={this.state.post.title}>
                <p>{ this.state.post.text }</p>
            </Card>
        );
    }
}

export default PostDetail;