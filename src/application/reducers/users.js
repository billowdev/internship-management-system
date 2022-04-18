import { LOAD_USERS_SUCCESS } from "../actions/users";

const initialState = {
  allUsers: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return { allUsers: action.payload.data, error: null };
    default:
      return state;
  }
};

export default reducer;
