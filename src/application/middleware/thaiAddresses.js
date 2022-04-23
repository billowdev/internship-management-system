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
							const resp = await api.thaiAddresses.getGeographies();
							dispatch(thaiAddressesActions.loadGeographiesSuccess(resp));
							saveState('geographies', resp.data);
						} catch (error) {
							removeState('geographies')
							dispatch(thaiAddressesActions.loadGeographiesFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_ALL_PROVINCES) {
						try {
							const resp = await api.thaiAddresses.getAllProvinces();
							dispatch(thaiAddressesActions.loadAllProvincesSuccess(resp.data));
							saveState('all-provinces', resp.data);
						} catch (error) {
							removeState('all-provinces')
							dispatch(thaiAddressesActions.loadProvincesFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_PROVINCES) {
						try {
							const resp = await api.thaiAddresses.getProvinces(action.payload);
							dispatch(thaiAddressesActions.loadProvincesSuccess(resp.data));
							saveState('provinces', resp.data);
						} catch (error) {
							removeState('provinces')
							dispatch(thaiAddressesActions.loadProvincesFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_DISTRICTS) {
						try {
							const resp = await api.thaiAddresses.getDistricts(action.payload);
							dispatch(thaiAddressesActions.loadDistrictsSuccess(resp.data));
							saveState('districts', resp.data);
						} catch (error) {
							removeState('districts')
							dispatch(thaiAddressesActions.loadDistrictsFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_SUB_DISTRICTS) {
						try {
							const resp = await api.thaiAddresses.getSubDistricts(action.payload);
							dispatch(thaiAddressesActions.loadSubDistrictsSuccess(resp.data));
							saveState('sub-districts', resp.data);
						} catch (error) {
							removeState('sub-districts')
							dispatch(thaiAddressesActions.loadSubDistrictsFailure(error));
						}
					}
					if (action.type === thaiAddressesActions.LOAD_SUB_DISTRICT_BY_ID) {
						try {
							const resp = await api.thaiAddresses.getSubDistrictById(action.payload);
							dispatch(thaiAddressesActions.loadSubDistrictByIdSuccess(resp.data));
							saveState('sub-district-data', resp.data);
						} catch (error) {
							removeState('sub-district-data')
							dispatch(thaiAddressesActions.loadSubDistrictByIdFailure(error));
						}
					}
				};

export default [loadThaiAddressesFlow];
