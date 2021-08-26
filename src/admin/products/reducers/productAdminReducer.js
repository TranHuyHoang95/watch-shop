const initialState = {
    list: [],
  };
  
  const productAdminReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCT": {
        return {
          ...state,
          list: action.payload,
        };
      }
      case "GET_ONE":{
        return{
            ...state,
            item: action.payload,
          };
      }
      case "POST_PRODUCT": {
        let listData = [...state.list];
        listData.push(action.payload);
        return {
          ...state,
          list: listData,
        };
      }
      case "UPDATE_PRODUCT": {
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
  
  export default productAdminReducer;
  