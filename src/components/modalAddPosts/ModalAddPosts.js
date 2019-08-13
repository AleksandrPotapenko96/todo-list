import React from "react";
import "./modalAddPosts.scss";

class ModalAddPosts extends React.Component {
  initialState = {
    imagePath:
    this.props.imagePath || this.props.img || "https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?size=626&ext=jpg",
      title: this.props.title,
      text: this.props.text
  };

  state = { ...this.initialState };

  fileRef = React.createRef();

  handleSubmit = () => {
    this.props.submit && this.props.submit(this.state);
    this.props.close && this.props.close();
  };

  changeName = ({ target }) => this.setState({ [target.name]: target.value });
  

  handleUploadImg = (e) => {
    const fileInfo = this.fileRef.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imagePath: reader.result });
    };
    if (fileInfo) {
      reader.readAsDataURL(fileInfo);
    }
  };

  render() {
    const { close, edit } = this.props;
    const { imagePath, title, text } = this.state;
    

    return (
      <div className="modal__container-posts">
        <div>
          <div>
            <p>{edit ? `${edit} posts` : `Add new posts`}</p>
          </div>
          <div className="input__container">
            <input className="input" placeholder="Title" name="title" value={title} onChange={this.changeName}/>
            <button className="add__avatar-button">
              <label htmlFor="files" className="btn">
                Add avatar
              </label>
              <input
                accept="image/x-png,image/gif,image/jpeg"
                ref={(ref) => (this.fileRef = ref)}
                id="files"
                type="file"
                onChange={this.handleUploadImg}
              />
            </button>
          </div>
          <div className="add__post-content">
            <textarea className="add__post-text" placeholder="Description" name="text" value={text} onChange={this.changeName}/>
            <img className="add__post-img" src={imagePath} alt="" />
          </div>
          <div className="button__container-add">
            <button onClick={close}>Close</button>
            <button onClick={this.handleSubmit}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAddPosts;
