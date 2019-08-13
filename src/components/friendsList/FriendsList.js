import React from "react";
import "./friendsList.scss";
import PersonalList from "../personalList/PersonalList";
import { connect } from "react-redux";



class FriendsList extends React.Component {
  state = {
    // data: [
    //   {
    //     firstName: "Andrew",
    //     lastName: "Moroz",
    //     dateOfBirth: "Fri Aug 05 2002 12:14:34 GMT+0300 (Восточная Европа, летнее время)",
    //     id: 1,
    //     img:
    //       "https://ageyenko.ua/assets/photos/anime-unikalnaja-biznes-model-ili-chistoe-tvorchestvo_1079x681.jpg",
    //     imgDefault: "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
    //   },
    //   {
    //     firstName: "Daniel",
    //     lastName: "Mitchel",
    //     dateOfBirth: "Fri Aug 05 1996 12:14:34 GMT+0300 (Восточная Европа, летнее время)",
    //     id: 2,
    //     img: "",
    //     imgDefault: "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
    //   },
    //   {
    //     firstName: "Wsad",
    //     lastName: "1234",
    //     dateOfBirth: "Fri Aug 05 1922 12:14:34 GMT+0300 (Восточная Европа, летнее время)",
    //     id: 3,
    //     img:
    //       "https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?size=626&ext=jpg",
    //     imgDefault: "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
    //   },
    // ],
    elements: [],
    modalEditFriends: false,
    modalEditPosts: false,
  };



  render() {
    const { friends } = this.props;
    const elements =
      friends && friends.length ? friends.map((item) => <PersonalList key={item.id} {...item} />) : null;

    return elements && elements.length ? <div className="friend__list-container">{elements}</div> : null;
  }
}


export default connect(({ friends }) => ({
  friends: friends.list
}))(FriendsList);
