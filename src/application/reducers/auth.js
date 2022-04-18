import { LOAD_AUTH_SUCCESS } from "../actions/auth";

const initialState = {
  authStatus: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTH_SUCCESS:
      return { authStatus: action.payload, error: null };
    default:
      return state;
  }
};

export default reducer;
