import { LOAD_LOGIN_SUCCESS } from "../../actions/admin/login";

const initialState = {
  loginData: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOGIN_SUCCESS:
      return { loginData: action.payload.data, error: null };
    default:
      return state;
  }
};

export default reducer;
