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
        };

export default [loadLoginFlow];
