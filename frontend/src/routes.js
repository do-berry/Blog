import React from 'react';
import { Route } from 'react-router-dom';

import PostList from './containers/PostListView.js';
import PostDetail from './containers/PostDetailView.js';
import About from './containers/About.js';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PostList} />
        <Route exact path='/post/:postID' component={PostDetail} />
        <Route exact path='/about' component={About} />
    </div>
);

export default BaseRouter;