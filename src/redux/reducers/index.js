const initialState = {
  favs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVS":
      return {
        ...state,
        favs: {
          ...state.favs,
          content: [...state.favs.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        favs: {
          ...state.favs,
          content: state.favs.content.filter((job, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
