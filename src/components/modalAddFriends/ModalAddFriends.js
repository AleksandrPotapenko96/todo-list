import React from "react";
// import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./modalAddFriends.scss";

const defaultAvatar = "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg";

class ModalAddFriends extends React.Component {
  constructor(props) {
    super(props);
    const date = props.dateOfBirth ? new Date(props.dateOfBirth) : new Date();
    this.state = {
      date,
      visible: false,
      imagePath: props.img || defaultAvatar,
      firstName: props.firstName,
      lastName: props.lastName,
    };

    this.fileRef = React.createRef();
  }

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

  handleOpenCalendar = () => {
    // const { visible } = this.state
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  handleChange = (value) => {
    this.setState({
      date: value,
    });
    console.log(`date ${this.state.date}`);
    
  };

  handleSubmit = () => {
    this.props.submit && this.props.submit(this.state);
    this.props.close && this.props.close();
  };

  changeName = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    // console.log(new Date() - this.state.date)
    const { close, edit } = this.props;

    const { imagePath, date, firstName, lastName } = this.state;
    console.log("State", this.props);

    return (
      <div className="modal__container-friends">
        <div>
          <p>{edit ? `${edit} friends` : `Add new friends`}</p>
          <div className="input__container">
            <input
              name="firstName"
              className="input"
              onChange={this.changeName}
              placeholder="First name"
              value={firstName}
            />
            <input
              name="lastName"
              className="input"
              onChange={this.changeName}
              placeholder="Last name"
              value={lastName}
            />
          </div>
          <div />
          <div className="modal__container-actions">
            <div className="img__container">
              <img className="add__avatar-img" src={imagePath} alt="" />
            </div>

            <div className="button__container-info">
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
              <div>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={date}
                  onChange={this.handleChange}
                  showMonthDropdown
                  showYearDropdown
                />
              </div>
              <div className="button__container-add">
                <button onClick={close}>Close</button>
                <button onClick={this.handleSubmit}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAddFriends;


  /* <div className="modal__container-friends">
        <div>
          <p>Add new friends</p>
          <div className="input__container">
            <input className="input" placeholder="First name" />
            <input className="input" placeholder="Last name" />
          </div>
          <div />
          <div className="modal__container-actions">
            <img className="add__avatar-img" src={imagePath} alt="" />
            <div className="button__container-info">
              <button className="add__avatar-button">
                <label for="files" class="btn">
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
              <div>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.date}
                  onChange={this.handleChange}
                  showMonthDropdown
                  showYearDropdown
                />
              </div>
              <div className="button__container-add">
                <button onClick={close}>Close</button>
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div> */

