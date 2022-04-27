export const LOAD_LOGIN = '[LOGIN] LOAD';
export const LOAD_LOGIN_SUCCESS = '[LOGIN] LOAD SUCCESS';
export const LOAD_LOGIN_FAILURE = '[LOGIN] LOAD FAILURE';

export const loadLogin = query => ({
    type: LOAD_LOGIN,
    payload: query,
});

export const loadLoginSuccess = data => ({
    type: LOAD_LOGIN_SUCCESS,
    payload: data,
});

export const loadLoginFailure = error => ({
    type: LOAD_LOGIN_FAILURE,
    payload: error,
});


export const CREATE_LOGIN = '[LOGIN] CREATE';
export const CREATE_LOGIN_SUCCESS = '[LOGIN] CREATE SUCCESS';
export const CREATE_LOGIN_FAILURE = '[LOGIN] CREATE FAILURE';

export const createLogin = query => ({
    type: CREATE_LOGIN,
    payload: query,
});

export const createLoginSuccess = data => ({
    type: CREATE_LOGIN_SUCCESS,
    payload: data,
});

export const createLoginFailure = error => ({
    type: CREATE_LOGIN_FAILURE,
    payload: error,
});


export const UPDATE_LOGIN = '[LOGIN] UPDATE';
export const UPDATE_LOGIN_SUCCESS = '[LOGIN] UPDATE SUCCESS';
export const UPDATE_LOGIN_FAILURE = '[LOGIN] UPDATE FAILURE';

export const updateLogin = query => ({
    type: UPDATE_LOGIN,
    payload: query,
});

export const updateLoginSuccess = data => ({
    type: UPDATE_LOGIN_SUCCESS,
    payload: data,
});

export const updateLoginFailure = error => ({
    type: UPDATE_LOGIN_FAILURE,
    payload: error,
});

export const DELETE_LOGIN = '[LOGIN] DELETE';
export const DELETE_LOGIN_SUCCESS = '[LOGIN] DELETE SUCCESS';
export const DELETE_LOGIN_FAILURE = '[LOGIN] DELETE FAILURE';

export const deleteLogin = query => ({
    type: DELETE_LOGIN,
    payload: query,
});

export const deleteLoginSuccess = data => ({
    type: DELETE_LOGIN_SUCCESS,
    payload: data,
});

export const deleteLoginFailure = error => ({
    type: DELETE_LOGIN_FAILURE,
    payload: error,
});


export const LOAD_LOGIN_ACCOUNT = '[LOGIN] LOAD ACCOUNT';
export const LOAD_LOGIN_ACCOUNT_SUCCESS = '[LOGIN] LOAD ACCOUNT SUCCESS';
export const LOAD_LOGIN_ACCOUNT_FAILURE = '[LOGIN] LOAD ACCOUNT FAILURE';

export const loadLoginAccount = query => ({
    type: LOAD_LOGIN_ACCOUNT,
    payload: query,
});

export const loadLoginAccountSuccess = data => ({
    type: LOAD_LOGIN_ACCOUNT_SUCCESS,
    payload: data,
});

export const loadLoginAccountFailure = error => ({
    type: LOAD_LOGIN_ACCOUNT_FAILURE,
    payload: error,
});
