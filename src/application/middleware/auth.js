import * as authActions from "../actions/auth";
import * as uiActions from "../actions/ui";
import Cookies from "js-cookie";
import { saveState } from "../../helpers/Persist.js";
const loadAuthFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === authActions.LOAD_AUTH) {
            try {
              dispatch(uiActions.setLoading(true));
              const auth = await api.auth.getAuth();
              dispatch(authActions.loadAuthSuccess(auth));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(authActions.loadAuthFailure(error));
            }
          }
          if (action.type === authActions.LOAD_SIGNIN) {
            try {
              dispatch(uiActions.setLoading(true));
              const data = await api.auth.signin(action.payload);
              dispatch(authActions.loadSigninSuccess(data));
              const { id, username, permission, token } = data
              Cookies.set("access-token", token, { expires: 7 });
              saveState('auth-state', { id, username, permission })
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(authActions.loadSigninFailure(error));
            }
          }
          if (action.type === authActions.LOAD_SIGNOUT) {
            try {
              Cookies.remove("access-token");
              localStorage.clear();
              dispatch(authActions.loadSignoutSuccess("success"));
            } catch (error) {
              dispatch(authActions.loadSignoutFailure(error));
            }
          }
        };

export default [loadAuthFlow];
