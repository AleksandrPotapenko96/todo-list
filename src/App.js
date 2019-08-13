import React from "react";
import { connect } from "react-redux";
import FriendList from "./components/friendsList/FriendsList";
import Header from "./components/header/Header";
// import { actions } from './actions/actionsModal'
import { BrowserRouter } from "react-router-dom";
import PostList from "./components/postList/PostList";
import "./App.scss";
// import ModalAddFriends from './components/modalAddFriends/ModalAddFriends'
// import ModalAddPosts from './components/modalAddPosts/ModalAddPosts'

import { posts } from "./actions";
import { friends } from "./actions";

class App extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className='app__container'>
            <Header />
            <div className="app__container-lists">
              <PostList />
              <FriendList />
            </div>
          </div>

          {/* <ModalAddFriends />
            <ModalAddPosts /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(
  ({ posts, friends }) => ({
    posts,
    friends
  }),
  // ({ friends }) => ({
  //   friends,
  // }),

  (dispatch) => ({
    getPosts: () => dispatch(posts.request()),
    // getFriendsSaga: () => dispatch(friends.request()),
  })
)(App);
