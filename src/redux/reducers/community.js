const initialState = {
  content: [],
  page: 0,
  size: 10,
  totalElements: 0,
};

const community = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOARD_SUCCEEDED":
      return {
        content: action.payload.content,
        page: action.payload.number,
        size: action.payload.size,
        totalElements: action.payload.totalElements,
      };
    case "MODIFY_BOARD_SUCCEEDED": {
      const newState = { ...state };
      newState.content = state.content.map((community) =>
        community.id === action.payload.id ? { ...action.payload } : community
      );
      return newState;
    }
    default:
      return state;
  }
};

export default community;
