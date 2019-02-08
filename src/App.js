import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
// import Main from './app/pages/Main';
// import About from './app/components/About';

import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';
import PageNotFound from './app/pages/PageNotFound';

const app = document.getElementById('root');

ReactDOM.render(
<Router history={browserHistory}>
<Route path="/" component={Layout}>
<IndexRoute component={Main}/>
<Route path="users" component={Users}>
    <Route path=":userId" component={User}/>  
</Route>
<Route path="posts" component={Posts}>
    <Route path=":postId" component={Posts}/> 
</Route>
<Route path="comments" component={Comments}>
    <Route path=":commentId" component={Comment}/> 
</Route>
<Route path="*" component={PageNotFound}/>
</Route>
</Router>, 
app);