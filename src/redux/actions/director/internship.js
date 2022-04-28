
export const LOAD_INTERNSHIP_PENDING = '[DIRECTOR.INTERNSHIP] LOAD PENDING';
export const LOAD_INTERNSHIP_PENDING_SUCCESS = '[DIRECTOR.INTERNSHIP] LOAD PENDING SUCCESS';
export const LOAD_INTERNSHIP_PENDING_FAILURE = '[DIRECTOR.INTERNSHIP] LOAD PENDING FAILURE';

export const loadInternshipPending = query => ({
    type: LOAD_INTERNSHIP_PENDING,
    payload: query,
});

export const loadInternshipPendingSuccess = data => ({
    type: LOAD_INTERNSHIP_PENDING_SUCCESS,
    payload: data,
});

export const loadInternshipPendingFailure = error => ({
    type: LOAD_INTERNSHIP_PENDING_FAILURE,
    payload: error,
});



export const LOAD_INTERNSHIP_CONFIRM = '[DIRECTOR.INTERNSHIP] LOAD CONFIRM';
export const LOAD_INTERNSHIP_CONFIRM_SUCCESS = '[DIRECTOR.INTERNSHIP] LOAD CONFIRM SUCCESS';
export const LOAD_INTERNSHIP_CONFIRM_FAILURE = '[DIRECTOR.INTERNSHIP] LOAD CONFIRM FAILURE';

export const loadInternshipConfirm = query => ({
    type: LOAD_INTERNSHIP_CONFIRM,
    payload: query,
});

export const loadInternshipConfirmSuccess = data => ({
    type: LOAD_INTERNSHIP_CONFIRM_SUCCESS,
    payload: data,
});

export const loadInternshipConfirmFailure = error => ({
    type: LOAD_INTERNSHIP_CONFIRM_FAILURE,
    payload: error,
});

export const LOAD_INTERNSHIP_DETAIL = '[DIRECTOR.INTERNSHIP] LOAD DETAIL';
export const LOAD_INTERNSHIP_DETAIL_SUCCESS = '[DIRECTOR.INTERNSHIP] LOAD DETAIL SUCCESS';
export const LOAD_INTERNSHIP_DETAIL_FAILURE = '[DIRECTOR.INTERNSHIP] LOAD DETAIL FAILURE';

export const loadInternshipDetail = query => ({
    type: LOAD_INTERNSHIP_DETAIL,
    payload: query,
});

export const loadInternshipDetailSuccess = data => ({
    type: LOAD_INTERNSHIP_DETAIL_SUCCESS,
    payload: data,
});

export const loadInternshipDetailFailure = error => ({
    type: LOAD_INTERNSHIP_DETAIL_FAILURE,
    payload: error,
});


export const CONFIRM_INTERNSHIP = '[DIRECTOR.INTERNSHIP] UPDATE';
export const CONFIRM_INTERNSHIP_SUCCESS = '[DIRECTOR.INTERNSHIP] UPDATE SUCCESS';
export const CONFIRM_INTERNSHIP_FAILURE = '[DIRECTOR.INTERNSHIP] UPDATE FAILURE';

export const confirmInternship = query => ({
    type: CONFIRM_INTERNSHIP,
    payload: query,
});

export const confirmInternshipSuccess = data => ({
    type: CONFIRM_INTERNSHIP_SUCCESS,
    payload: data,
});

export const confirmInternshipFailure = error => ({
    type: CONFIRM_INTERNSHIP_FAILURE,
    payload: error,
});