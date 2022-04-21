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
