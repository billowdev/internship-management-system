export const LOAD_STUDENT_PROFILE = '[PROFILE.STUDENT] LOAD';
export const LOAD_STUDENT_PROFILE_SUCCESS = '[PROFILE.STUDENT] LOAD SUCCESS';
export const LOAD_STUDENT_PROFILE_FAILURE = '[PROFILE.STUDENT] LOAD FAILURE';

export const loadStudentProfile = query => ({
    type: LOAD_STUDENT_PROFILE,
    payload: query,
});
export const loadStudentProfileSuccess = data => ({
    type: LOAD_STUDENT_PROFILE_SUCCESS,
    payload: data,
});

export const loadStudentProfileFailure = error => ({
    type: LOAD_STUDENT_PROFILE_FAILURE,
    payload: error,
});



export const UPDATE_STUDENT_PROFILE = '[PROFILE.STUDENT] UPDATE';
export const UPDATE_STUDENT_PROFILE_SUCCESS = '[PROFILE.STUDENT] UPDATE SUCCESS';
export const UPDATE_STUDENT_PROFILE_FAILURE = '[PROFILE.STUDENT] UPDATE FAILURE';

export const updateStudentProfile = query => ({
    type: UPDATE_STUDENT_PROFILE,
    payload: query,
});

export const updateStudentProfileSuccess = data => ({
    type: UPDATE_STUDENT_PROFILE_SUCCESS,
    payload: data,
});

export const updateStudentProfileFailure = error => ({
    type: UPDATE_STUDENT_PROFILE_FAILURE,
    payload: error,
});
