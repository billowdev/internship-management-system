
export const UPLOAD_IMAGE = '[RESUME] UPLOAD IMAGE';
export const UPLOAD_IMAGE_SUCCESS = '[RESUME] UPLOAD IMAGE SUCCESS';
export const UPLOAD_IMAGE_FAILURE = '[RESUME] UPLOAD IMAGE FAILURE';

export const uploadImage = query => ({
    type: UPLOAD_IMAGE,
    payload: query,
});

export const uploadImageSuccess = data => ({
    type: UPLOAD_IMAGE_SUCCESS,
    payload: data,
});

export const uploadImageFailure = error => ({
    type: UPLOAD_IMAGE_FAILURE,
    payload: error,
});