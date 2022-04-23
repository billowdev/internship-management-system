import { LOAD_ALL_PROVINCES_SUCCESS, LOAD_DISTRICTS_SUCCESS, LOAD_SUB_DISTRICTS_SUCCESS, LOAD_SUB_DISTRICT_BY_ID_SUCCESS } from "../actions/thaiAddresses";

const initialState = {
	allProvinces: [],
	allDistricts: [],
	allSubDistricts: [],
	subDistrictData: [],
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_ALL_PROVINCES_SUCCESS:
			return { allProvinces: action.payload, error: null };
		case LOAD_DISTRICTS_SUCCESS:
			return { allDistricts: action.payload, error: null };
		case LOAD_SUB_DISTRICTS_SUCCESS:
			return { allSubDistricts: action.payload, error: null };
		case LOAD_SUB_DISTRICT_BY_ID_SUCCESS:
			return { subDistrictData: action.payload, error: null };

		default:
			return state;
	}
};

export default reducer;
