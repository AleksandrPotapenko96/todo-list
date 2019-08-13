import React from "react";
import { connect } from "react-redux";
import "./postList.scss";
// import PersonalList from '../personalList/PersonalList'
import Post from "../post/Post";

class PostList extends React.Component {
  render() {
    const { posts } = this.props;
    const elements =
      posts && posts.length ? posts.map((item) => <Post key={item.id} {...item} />) : null;

    return <div className="post__list-container">{elements}</div>;
  }
}

export default connect(({ posts }) => ({
  posts: posts.list,
}))(PostList);
