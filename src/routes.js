import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import PostList from "../src/containers/post-list";
import PostForm from "../src/containers/post-form";
import Post from "../src/containers/post";
import NotFound from "../src/components/not-found";

class Routes extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={PostList} />
          <Route path="/post-form" component={PostForm} />
          <Route path="/post/:id" component={Post} />
          <Route path="*" component={NotFound} />
        </Router>
      </div>
    );
  }
}

export default Routes;
