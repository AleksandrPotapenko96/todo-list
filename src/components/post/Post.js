import React from "react";
import "./post.scss";
import ModalAddPosts from "../modalAddPosts/ModalAddPosts";

class Post extends React.Component {
  state = {
    modalEditPost: false,
  };

  handleEditPost = () => {
    this.setState({ modalEditPost: true });
  };

  handleEditClosePosts = () => {
    this.setState({ modalEditPost: false });
  };

  render() {
    const { img, text, title, textDefault, imgDefault, titleDefault, id , imagePath } = this.props;
    return (
      <div className="post__container">
        <div className="text__container">
          <h1 className="title">{title === "" ? titleDefault : title}</h1>
          <p className="post__text">{text === "" ? textDefault : text}</p>
        </div>
        <div className="img__container">
          <div>
            <img className="img" src={imagePath ? imagePath : (img === "" ? imgDefault : img)} alt="" />
          </div>

          <div className="container__button">
            <button onClick={this.handleEditPost}>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        {this.state.modalEditPost ? (
          <ModalAddPosts {...this.props} close={this.handleEditClosePosts} edit={'Edit'}/>
        ) : null}
      </div>
    );
  }
}

export default Post;
