export const PAGE_LOADED = '[UI] page loaded';
export const SET_LOADING_ON = '[UI] set loading on';
export const SET_LOADING_OFF = '[UI] set loading off';

export const pageLoaded = {
    type: PAGE_LOADED
};

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading,
});