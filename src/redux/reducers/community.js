const initialState = [];

const community = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOARD_SUCCEEDED":
      console.log("add");
      return [{ ...action.payload }, ...state];
    case "FETCH_BOARD_SUCCEEDED":
      return [...action.payload].reverse();
    case "REMOVE_BOARD_SUCCEEDED":
      return state.filter((community) => community.id !== action.payload);
    case "MODIFY_BOARD_SUCCEEDED":
      console.log("modify");
      return state.map((community) =>
        community.id === action.payload.id ? { ...action.payload } : community
      );

    default:
      return state;
  }
};

export default community;
