import { FRIENDS } from "../actions/index";

const initial = {
  list: [{
    firstName: "Andrew",
    lastName: "Moroz",
    dateOfBirth: "Fri Aug 05 2002 12:14:34 GMT+0300 (Восточная Европа, летнее время)",
    id: 1,
    img:
      "https://ageyenko.ua/assets/photos/anime-unikalnaja-biznes-model-ili-chistoe-tvorchestvo_1079x681.jpg",
    imgDefault: "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
  },
  {
    firstName: "Daniel",
    lastName: "Mitchel",
    dateOfBirth: "Fri Aug 05 1996 12:14:34 GMT+0300 (Восточная Европа, летнее время)",
    id: 2,
    img: "",
    imgDefault: "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
  },
  {
    firstName: "Wsad",
    lastName: "1234",
    dateOfBirth: "Fri Aug 05 1922 12:14:34 GMT+0300 (Восточная Европа, летнее время)",
    id: 3,
    img:
      "https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?size=626&ext=jpg",
    imgDefault: "http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg",
  },],
  isError: false,
};

export default (state = initial, { type, payload }) => {
  switch (type) {
    case FRIENDS.SUCCEEDED: {
      return {
        list: payload,
        isError: false,
      };
    }

    case FRIENDS.FAILED: {
      return {
        list: [],
        isError: true,
      };
    }

    case FRIENDS.ADDED: {
      return {
        list: [...state.list, payload],
      };
    }

    default: {
      return state;
    }
  }
};
