export const LOAD_RESUME = '[RESUME] LOAD';
export const LOAD_RESUME_SUCCESS = '[RESUME] LOAD SUCCESS';
export const LOAD_RESUME_FAILURE = '[RESUME] LOAD FAILURE';

export const loadResume = {
	type: LOAD_RESUME,
}
export const loadResumeSuccess = data => ({
	type: LOAD_RESUME_SUCCESS,
	payload: data,
});

export const loadResumeFailure = error => ({
	type: LOAD_RESUME_FAILURE,
	payload: error,
});



export const UPDATE_RESUME = '[RESUME] UPDATE';
export const UPDATE_RESUME_SUCCESS = '[RESUME] UPDATE SUCCESS';
export const UPDATE_RESUME_FAILURE = '[RESUME] UPDATE FAILURE';

export const updateResume = query => ({
    type: UPDATE_RESUME,
    payload: query,
});

export const updateResumeSuccess = data => ({
    type: UPDATE_RESUME_SUCCESS,
    payload: data,
});

export const updateResumeFailure = error => ({
    type: UPDATE_RESUME_FAILURE,
    payload: error,
});
