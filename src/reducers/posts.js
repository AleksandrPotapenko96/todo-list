import { POSTS } from "../actions/index";

const initial = {
  list: [],
  isError: false,
};

export default (state = initial, { type, payload }) => {
  switch (type) {
    case POSTS.SUCCEEDED: {
      return {
        list: payload,
        isError: false,
      };
    }

    case POSTS.FAILED: {
      return {
        list: [],
        isError: true,
      };
    }

    case POSTS.ADDED: {
      return {
        list: [...state.list, payload],
      };
    }

    default: {
      return state;
    }
  }
};
