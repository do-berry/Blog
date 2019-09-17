import React, { Component } from 'react';
import axios from 'axios';

import { Card } from 'antd';
import Post from '../post.js';

class PostDetail extends Component {
    state = {
        post: {},
    }

    componentDidMount() {
        const postID = this.props.match.params.postID;
        axios.get('http://127.0.0.1:8000/api/' + postID)
            .then(res => {
                this.setState({
                    posts: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return(
            <Card title={this.state.post.title}>
                // TODO
            </Card>
        );
    }
}

export default PostDetail;