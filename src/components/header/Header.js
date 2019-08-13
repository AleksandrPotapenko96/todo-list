import React, { useState, memo } from "react";
import { connect } from "react-redux";
import { posts, friends } from "../../actions";
import "./header.scss";
import ModalAddFriends from "../modalAddFriends/ModalAddFriends";
import ModalAddPosts from "../modalAddPosts/ModalAddPosts";

const Header = (props) => {
  const [modalAddFriends, toggleAddFriend] = useState(false);
  const [modalAddPosts, toggleAddPosts] = useState(false);

  return (
    <div className="container">
      <select className="select">
        <option>Friend</option>
        <option>Post</option>
      </select>
      {modalAddFriends && <ModalAddFriends
        close={() => toggleAddFriend(!modalAddFriends)}
        submit={(friends) => props.addFriends(friends)}
        />}
      {modalAddPosts && (
        <ModalAddPosts
          close={() => toggleAddPosts(!modalAddPosts)}
          submit={(post) => props.addPost(post)}
        />
      )}
      <input className="seach" type="text" placeholder="Add todo" name="todoValue" />
      <button className="button" onClick={() => toggleAddPosts(!modalAddPosts)}>
        Add new Post
      </button>
      <button className="button" onClick={() => toggleAddFriend(!modalAddFriends)}>
        Add new Friend
      </button>
    </div>
  );
};

const pureHeader = memo(Header);

export default connect(
  () => ({}),
  (dispatch) => ({
    addPost: (payload) => dispatch(posts.added(payload)),
    addFriends: (payload) => dispatch(friends.added(payload))
  })
)(pureHeader);

/*
import React from "react";
import "./header.scss";
import ModalAddFriends from "../modalAddFriends/ModalAddFriends";
import ModalAddPosts from "../modalAddPosts/ModalAddPosts";

class Header extends React.Component {
  myRef = React.createRef();
  state = {
    modalAddFriends: false,
    modalAddPosts: false,
  };

  handleAddFriends = () => { // prevState => ({ modalAddFriends: !prevState.modalAddaFriends })
    this.setState({ modalAddFriends: true });
  };

  handleAddPosts = () => {
    this.setState({ modalAddPosts: true });
  };

  handleCloseAddFriends = () => {
    this.setState({ modalAddFriends: false });
  };

  handleCloseAddPosts = () => {
    this.setState({ modalAddPosts: false });
  };

  render() {
    const { modalAddFriends, modalAddPosts } = this.state;
    return (
      <div className="container">
        <select className="select">
          <option>Friend</option>
          <option>Post</option>
        </select>
        {modalAddFriends ? <ModalAddFriends close={this.handleCloseAddFriends} /> : null}
        {modalAddPosts ? <ModalAddPosts close={this.handleCloseAddPosts} /> : null}
        <input
          className="seach"
          type="text"
          placeholder="Add todo"
          name="todoValue"
          ref={this.myRef}
        />
        <button className="button" onClick={this.handleAddPosts}>
          Add new Post
        </button>
        <button className="button" onClick={this.handleAddFriends}>
          Add new Friend
        </button>
      </div>
    );
  }
}
export default Header;
*/
