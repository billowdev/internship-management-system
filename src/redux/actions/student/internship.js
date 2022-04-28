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


export const SEND_INTERNSHIP = '[DIRECTOR.INTERNSHIP] SEND INTERNSHIP';
export const SEND_INTERNSHIP_SUCCESS = '[DIRECTOR.INTERNSHIP] SEND INTERNSHIP SUCCESS';
export const SEND_INTERNSHIP_FAILURE = '[DIRECTOR.INTERNSHIP] SEND INTERNSHIP FAILURE';

export const sendInternship = query => ({
    type: SEND_INTERNSHIP,
    payload: query,
});

export const sendInternshipSuccess = data => ({
    type: SEND_INTERNSHIP_SUCCESS,
    payload: data,
});

export const sendInternshipFailure = error => ({
    type: SEND_INTERNSHIP_FAILURE,
    payload: error,
});

export const UNSEND_INTERNSHIP = '[STUDENT.INTERNSHIP] UNSEND';
export const UNSEND_INTERNSHIP_SUCCESS = '[STUDENT.INTERNSHIP] UNSEND SUCCESS';
export const UNSEND_INTERNSHIP_FAILURE = '[STUDENT.INTERNSHIP] UNSEND FAILURE';

export const unsendInternship = query => ({
    type: UNSEND_INTERNSHIP,
    payload: query,
});

export const unsendInternshipSuccess = data => ({
    type: UNSEND_INTERNSHIP_SUCCESS,
    payload: data,
});

export const unsendInternshipFailure = error => ({
    type: UNSEND_INTERNSHIP_FAILURE,
    payload: error,
});
