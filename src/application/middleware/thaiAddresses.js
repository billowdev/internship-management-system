import * as thaiAddressesActions from "../actions/thaiAddresses";
import * as uiActions from "../actions/ui";
import { saveState, removeState } from "../../helpers/Persist.js";
const loadThaiAddressesFlow =
	({ api }) =>
		({ dispatch }) =>
			(next) =>
				async (action) => {
					next(action);
					if (action.type === thaiAddressesActions.LOAD_GEOGRAPHIES) {
						try {
							dispatch(uiActions.setLoading(true));
							const resp = await api.thaiAddresses.getGeographies();
							dispatch(thaiAddressesActions.loadGeographiesSuccess(resp));
							saveState('geographies', resp);
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							removeState('geographies')
							dispatch(thaiAddressesActions.loadGeographiesFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_PROVINCES) {
						try {
							dispatch(uiActions.setLoading(true));
							const resp = await api.thaiAddresses.getProvinces(action.payload);
							dispatch(thaiAddressesActions.loadProvincesSuccess(resp));
							saveState('provinces', resp);
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							removeState('provinces')
							dispatch(thaiAddressesActions.loadProvincesFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_DISTRICTS) {
						try {
							dispatch(uiActions.setLoading(true));
							const resp = await api.thaiAddresses.getDistricts(action.payload);
							dispatch(thaiAddressesActions.loadDistrictsSuccess(resp));
							saveState('districts', resp);
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							removeState('districts')
							dispatch(thaiAddressesActions.loadDistrictsFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_SUB_DISTRICTS) {
						try {
							dispatch(uiActions.setLoading(true));
							const resp = await api.thaiAddresses.getSubDistricts(action.payload);
							dispatch(thaiAddressesActions.loadSubDistrictsSuccess(resp));
							saveState('sub-districts', resp);
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							removeState('sub-districts')
							dispatch(thaiAddressesActions.loadSubDistrictsFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_SUB_DISTRICT_BY_ID) {
						try {
							dispatch(uiActions.setLoading(true));
							const resp = await api.thaiAddresses.getSubDistrictById(action.payload);
							dispatch(thaiAddressesActions.loadSubDistrictByIdSuccess(resp));
							saveState('sub-district-data', resp);
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							removeState('sub-district-data')
							dispatch(thaiAddressesActions.loadSubDistrictByIdFailure(error));
						}
					}
				};

export default [loadThaiAddressesFlow];
