import * as loginActions from "../../actions/admin/login";
import * as uiActions from "../../actions/ui";
import { saveState } from "../../../helpers/Persist.js";
const loadLoginFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === loginActions.LOAD_LOGIN) {
            try {
              dispatch(uiActions.setLoading(true));
              const loginData = await api.adminLogin.getLogin(action.payload);
              dispatch(loginActions.loadLoginSuccess(loginData));
              saveState('students', loginData?.data?.data)
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(loginActions.loadLoginFailure(error));
            }
          }
          if (action.type === loginActions.CREATE_LOGIN) {
            try {
              dispatch(uiActions.setLoading(true));
              const respCreateLogin = await api.adminLogin.createLogin(action.payload);
              dispatch(loginActions.createLoginSuccess(respCreateLogin));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(loginActions.createLoginFailure(error));
            }
          }
          if (action.type === loginActions.UPDATE_LOGIN) {
            try {
              dispatch(uiActions.setLoading(true));
              const respUpdateLogin = await api.adminLogin.updateLogin(action.payload);
              dispatch(loginActions.updateLoginSuccess(respUpdateLogin));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(loginActions.updateLoginFailure(error));
            }
          }
          if (action.type === loginActions.DELETE_LOGIN) {
            try {
              dispatch(uiActions.setLoading(true));
              const respDeleteLogin = await api.adminLogin.updateLogin(action.payload);
              dispatch(loginActions.deleteLoginSuccess(respDeleteLogin));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(loginActions.deleteLoginFailure(error));
            }
          }
        };

export default [loadLoginFlow];
