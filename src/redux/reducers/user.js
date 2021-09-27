const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_SUCCEEDED":
      return { ...action.payload };
    case "LOGIN_USER_SUCCESS":
      return { ...action.payload };
    case "LOGOUT_USER_SUCCESS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default user;
