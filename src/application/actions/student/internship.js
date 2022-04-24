export const LOAD_INTERNSHIP = '[INTERNSHIP] LOAD';
export const LOAD_INTERNSHIP_SUCCESS = '[INTERNSHIP] LOAD SUCCESS';
export const LOAD_INTERNSHIP_FAILURE = '[INTERNSHIP] LOAD FAILURE';

export const loadInternship = {
	type: LOAD_INTERNSHIP,
}
export const loadInternshipSuccess = data => ({
	type: LOAD_INTERNSHIP_SUCCESS,
	payload: data,
});

export const loadInternshipFailure = error => ({
	type: LOAD_INTERNSHIP_FAILURE,
	payload: error,
});



export const UPDATE_INTERNSHIP = '[INTERNSHIP] UPDATE';
export const UPDATE_INTERNSHIP_SUCCESS = '[INTERNSHIP] UPDATE SUCCESS';
export const UPDATE_INTERNSHIP_FAILURE = '[INTERNSHIP] UPDATE FAILURE';

export const updateInternship = query => ({
    type: UPDATE_INTERNSHIP,
    payload: query,
});

export const updateInternshipSuccess = data => ({
    type: UPDATE_INTERNSHIP_SUCCESS,
    payload: data,
});

export const updateInternshipFailure = error => ({
    type: UPDATE_INTERNSHIP_FAILURE,
    payload: error,
});
