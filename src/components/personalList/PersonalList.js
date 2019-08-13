import React from "react";
import "./personalList.scss";
import ModalAddFriends from "../modalAddFriends/ModalAddFriends";

class PersonalList extends React.Component {
  state = {
    visible: false,
    modalEditFriends: false,
  };

  handleMore = () => {
    // NOTE: change to prevSTATE CALLBACK
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  handleEditFriends = () => {
    this.setState({ modalEditFriends: true });
  };

  handleEditClosePosts = () => {
    this.setState({ modalEditFriends: false });
  };

  getAge = (dateString) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthYear = new Date(this.props.dateOfBirth ? this.props.dateOfBirth : dateString).getFullYear();
    return currentYear - birthYear;

  };

  render() {
    const { firstName, lastName, id, dateOfBirth, img, imgDefault, imagePath, date } = this.props;

    return (
      <div className="container__personal">
        <h1 onClick={this.handleMore}>
          {firstName}
          <div className={!this.state.visible ? `triangle-up` : `triangle-down`} />
        </h1>
        {!this.state.visible ? null : (
          <div className="personal__container">
            <div className="personal__container-more">
              <div className="info__container">
                <img className="personalImg" src={imagePath ? imagePath : (img === "" ? imgDefault : img)} alt="img" />
                <div>
                  <p>{`${firstName} ${lastName}`}</p>
                  <p>{`Age: ${this.getAge(date)}`}</p>
                </div>
              </div>
              <div className="container__button">
                <button onClick={this.handleEditFriends}>Edit</button>
                <button>Remove</button>
              </div>
            </div>
            {this.state.modalEditFriends ? (
              <ModalAddFriends {...this.props} close={this.handleEditClosePosts} edit={'Edit'} />
            ) : null}
          </div>
        )}
        {/* {this.state.modalEditFriends ? <ModalAddFriends close={this.handleEditClosePosts} /> : null} */}
      </div>
    );
  }
}

export default PersonalList;
