import React from 'react';
import { Route } from 'react-router-dom';

import PostList from './containers/PostListView.js';
import PostDetail from './containers/PostDetailView.js';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PostList} />
        <Route exact path='/post/:postID' component={PostDetail} />
    </div>
);

export default BaseRouter;