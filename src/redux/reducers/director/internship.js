import { LOAD_INTERNSHIP_PENDING_SUCCESS, LOAD_INTERNSHIP_DETAIL_SUCCESS, LOAD_INTERNSHIP_CONFIRM_SUCCESS } from "../../actions/director/internship";

const initialState = {
  internshipPernding: [],
  internshipConfirm: [],
  internshipDetail: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INTERNSHIP_PENDING_SUCCESS:
      return { internshipPernding: action.payload.data, error: null };
    case LOAD_INTERNSHIP_CONFIRM_SUCCESS:
      return { internshipConfirm: action.payload.data, error: null };
    case LOAD_INTERNSHIP_DETAIL_SUCCESS:
      return { internshipDetail: action.payload.data, error: null };
    default:
      return state;
  }
};

export default reducer;
