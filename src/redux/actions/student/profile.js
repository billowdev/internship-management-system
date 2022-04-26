export const LOAD_PROFILE = '[PROFILE] LOAD';
export const LOAD_PROFILE_SUCCESS = '[PROFILE] LOAD SUCCESS';
export const LOAD_PROFILE_FAILURE = '[PROFILE] LOAD FAILURE';

export const loadProfile = {
	type: LOAD_PROFILE,
}
export const loadProfileSuccess = data => ({
	type: LOAD_PROFILE_SUCCESS,
	payload: data,
});

export const loadProfileFailure = error => ({
	type: LOAD_PROFILE_FAILURE,
	payload: error,
});



export const UPDATE_PROFILE = '[PROFILE] UPDATE';
export const UPDATE_PROFILE_SUCCESS = '[PROFILE] UPDATE SUCCESS';
export const UPDATE_PROFILE_FAILURE = '[PROFILE] UPDATE FAILURE';

export const updateProfile = query => ({
    type: UPDATE_PROFILE,
    payload: query,
});

export const updateProfileSuccess = data => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: data,
});

export const updateProfileFailure = error => ({
    type: UPDATE_PROFILE_FAILURE,
    payload: error,
});
