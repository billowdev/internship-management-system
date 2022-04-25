export const LOAD_AUTH = '[AUTH] LOAD';
export const LOAD_AUTH_SUCCESS = '[AUTH] LOAD SUCCESS';
export const LOAD_AUTH_FAILURE = '[AUTH] LOAD FAILURE';

export const loadAuth = {
    type: LOAD_AUTH,
};

export const loadAuthSuccess = auth => ({
    type: LOAD_AUTH_SUCCESS,
    payload: auth,
});

export const loadAuthFailure = error => ({
    type: LOAD_AUTH_FAILURE,
    payload: error,
});

export const LOAD_SIGNIN = '[AUTH.SIGNIN] LOAD';
export const LOAD_SIGNIN_SUCCESS = '[AUTH.SIGNIN] SUCCESS';
export const LOAD_SIGNIN_FAILURE = '[AUTH.SIGNIN] FAILURE';

export const loadSignin = data => ({
    type: LOAD_SIGNIN,
    payload: data,
});

export const loadSigninSuccess = status => ({
    type: LOAD_SIGNIN_SUCCESS,
    payload: status,
});

export const loadSigninFailure = error => ({
    type: LOAD_SIGNIN_FAILURE,
    payload: error,
});

export const LOAD_SIGNOUT = '[AUTH.SIGNOUT] LOAD';
export const LOAD_SIGNOUT_SUCCESS = '[AUTH.SIGNOUT] SUUCESS';
export const LOAD_SIGNOUT_FAILURE = '[AUTH.SIGNOUT] FAILURE';

export const loadSignout = {
    type: LOAD_SIGNOUT,
}

export const loadSignoutSuccess = status => ({
    type: LOAD_SIGNOUT_SUCCESS,
    payload: status,
});

export const loadSignoutFailure = error => ({
    type: LOAD_SIGNOUT_FAILURE,
    payload: error,
});
