import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";
import Posts from "../Posts/Posts";
// import NewPost from "../NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent"
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

const AsyncNewPost = asyncComponent( () => {
  return import("../NewPost/NewPost")
})

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{ color: "red", textDecoration: "underline" }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts " /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
