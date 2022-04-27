import { LOAD_STUDENT_PROFILE_SUCCESS } from "../../actions/admin/profile";

const initialState = {
  profileData: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STUDENT_PROFILE_SUCCESS:
      return { profileData: action.payload.data, error: null };
    default:
      return state;
  }
};

export default reducer;
