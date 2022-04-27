export const PAGE_LOADED = '[UI] PAGE LOADED';
export const SET_LOADING_ON = '[UI] set LOADING ON';
export const SET_LOADING_OFF = '[UI] set LOADING OFF';

export const pageLoaded = {
    type: PAGE_LOADED
};

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading,
});

