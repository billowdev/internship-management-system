export const LOAD_USERS = '[USERS] LOAD';
export const LOAD_USERS_SUCCESS = '[USERS] LOAD SUCCESS';
export const LOAD_USERS_FAILURE = '[USERS] LOAD FAILURE';

export const loadUsers = {
    type: LOAD_USERS,
}

export const loadUsersSuccess = data => ({
    type: LOAD_USERS_SUCCESS,
    payload: data,
});

export const loadUsersFailure = error => ({
    type: LOAD_USERS_FAILURE,
    payload: error,
});
