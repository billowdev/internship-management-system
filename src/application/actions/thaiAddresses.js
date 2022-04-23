export const LOAD_GEOGRAPHIES = '[THAI ADDRESSES.GEOGRAPHIES ] LOAD';
export const LOAD_GEOGRAPHIES_SUCCESS = '[THAI ADDRESSES.GEOGRAPHIES ] LOAD SUCCESS';
export const LOAD_GEOGRAPHIES_FAILURE = '[THAI ADDRESSES.GEOGRAPHIES ] LOAD FAILURE';

export const loadGeographies = {
    type: LOAD_GEOGRAPHIES,
};

export const loadGeographiesSuccess = data => ({
    type: LOAD_GEOGRAPHIES_SUCCESS,
    payload: data,
});

export const loadGeographiesFailure = error => ({
    type: LOAD_GEOGRAPHIES_FAILURE,
    payload: error,
});

export const LOAD_ALL_PROVINCES = '[THAI ADDRESSES.ALL_PROVINCES ] LOAD';
export const LOAD_ALL_PROVINCES_SUCCESS = '[THAI ADDRESSES.ALL_PROVINCES ] LOAD SUCCESS';
export const LOAD_ALL_PROVINCES_FAILURE = '[THAI ADDRESSES.ALL_PROVINCES ] LOAD FAILURE';

export const loadAllProvinces = {
    type: LOAD_ALL_PROVINCES,
};

export const loadAllProvincesSuccess = data => ({
    type: LOAD_ALL_PROVINCES_SUCCESS,
    payload: data,
});

export const loadAllProvincesFailure = error => ({
    type: LOAD_GEOGRAPHIES_FAILURE,
    payload: error,
});


export const LOAD_PROVINCES = '[THAI ADDRESSES.PROVINCES] LOAD';
export const LOAD_PROVINCES_SUCCESS = '[THAI ADDRESSES.PROVINCES] LOAD SUCCESS';
export const LOAD_PROVINCES_FAILURE = '[THAI ADDRESSES.PROVINCES] LOAD FAILURE';

export const loadProvinces =  id => ({
    type: LOAD_PROVINCES,
    payload: id,
});

export const loadProvincesSuccess = data => ({
    type: LOAD_PROVINCES_SUCCESS,
    payload: data,
});

export const loadProvincesFailure = error => ({
    type: LOAD_PROVINCES_FAILURE,
    payload: error,
});

export const LOAD_DISTRICTS = '[THAI ADDRESSES.DISTRICTS] LOAD';
export const LOAD_DISTRICTS_SUCCESS = '[THAI ADDRESSES.DISTRICTS] LOAD SUCCESS';
export const LOAD_DISTRICTS_FAILURE = '[THAI ADDRESSES.DISTRICTS] LOAD FAILURE';

export const loadDistricts =  id => ({
    type: LOAD_DISTRICTS,
    payload: id,
});

export const loadDistrictsSuccess = data => ({
    type: LOAD_DISTRICTS_SUCCESS,
    payload: data,
});

export const loadDistrictsFailure = error => ({
    type: LOAD_DISTRICTS_FAILURE,
    payload: error,
});

export const LOAD_SUB_DISTRICTS = '[THAI ADDRESSES.SUB_DISTRICTS] LOAD';
export const LOAD_SUB_DISTRICTS_SUCCESS = '[THAI ADDRESSES.SUB_DISTRICTS] LOAD SUCCESS';
export const LOAD_SUB_DISTRICTS_FAILURE = '[THAI ADDRESSES.SUB_DISTRICTS] LOAD FAILURE';

export const loadSubDistricts =  id => ({
    type: LOAD_SUB_DISTRICTS,
    payload: id,
});

export const loadSubDistrictsSuccess = data => ({
    type: LOAD_SUB_DISTRICTS_SUCCESS,
    payload: data,
});

export const loadSubDistrictsFailure = error => ({
    type: LOAD_SUB_DISTRICTS_FAILURE,
    payload: error,
});


export const LOAD_SUB_DISTRICT_BY_ID = '[THAI ADDRESSES.SUB_DISTRICT_BY_ID] LOAD';
export const LOAD_SUB_DISTRICT_BY_ID_SUCCESS = '[THAI ADDRESSES.SUB_DISTRICT_BY_ID] LOAD SUCCESS';
export const LOAD_SUB_DISTRICT_BY_ID_FAILURE = '[THAI ADDRESSES.SUB_DISTRICT_BY_ID] LOAD FAILURE';

export const loadSubDistrictById =  id => ({
    type: LOAD_SUB_DISTRICT_BY_ID,
    payload: id,
});

export const loadSubDistrictByIdSuccess = data => ({
    type: LOAD_SUB_DISTRICT_BY_ID_SUCCESS,
    payload: data,
});

export const loadSubDistrictByIdFailure = error => ({
    type: LOAD_SUB_DISTRICTS_FAILURE,
    payload: error,
});