import React from 'react';
import { Route } from 'react-router-dom';

import PostList from './containers/PostListView.js';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PostList} />
        <Route exact path='/:postID' component={PostList} />
    </div>
);

export default BaseRouter;