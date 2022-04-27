import { LOAD_LOGIN_SUCCESS, LOAD_LOGIN_ACCOUNT_SUCCESS } from "../../actions/admin/login";

const initialState = {
  loginData: [],
  loginAccount: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOGIN_SUCCESS:
      return { loginData: action.payload.data, error: null };
    case LOAD_LOGIN_ACCOUNT_SUCCESS:
      return { loginAccount: action.payload.data, error: null };
    default:
      return state;
  }
};

export default reducer;
