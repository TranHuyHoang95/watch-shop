const initialState = {
  list: [],
};

const categoriesAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BRANCH": {
      return {
        ...state,
        brand: action.payload,
      };
    }
    case "GET_ONE": {
      return {
        ...state,
        item: action.payload,
      };
    }
    case "GET_CLOCKWORK": {
      return {
        ...state,
        clockwork: action.payload,
      };
    }
    case "GET_COLOR": {
      return {
        ...state,
        color: action.payload,
      };
    }
    case "GET_ALBERT": {
      return {
        ...state,
        albert: action.payload,
      };
    }
    case "UPDATE_CAT": {
      let listData = [...state.list];
      const listIsList = listData.find(
        (item) => item._id === action.payload._id
      );
      listData.splice(listData.indexOf(listIsList), 1, { ...action.payload });
      return {
        ...state,
        list: listData,
      };
    }

    default: {
      return state;
    }
  }
};

export default categoriesAdminReducer;
