import { LOAD_INTERNSHIP_SUCCESS } from "../../actions/student/internship";

const initialState = {
  internshipData: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INTERNSHIP_SUCCESS:
      return { internshipData: action.payload.data, error: null };
    default:
      return state;
  }
};

export default reducer;
