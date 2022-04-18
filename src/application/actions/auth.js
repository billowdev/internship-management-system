export const LOAD_AUTH = '[AUTH] LOAD';
export const LOAD_AUTH_SUCCESS = '[AUTH] LOAD success';
export const LOAD_AUTH_FAILURE = '[AUTH] LOAD failure';

export const loadAuth = {
    type: LOAD_AUTH,
};

export const loadAuthSuccess = todos => ({
    type: LOAD_AUTH_SUCCESS,
    payload: todos,
});

export const loadAuthFailure = error => ({
    type: LOAD_AUTH_FAILURE,
    payload: error,
});
