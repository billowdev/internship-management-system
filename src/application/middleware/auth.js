import * as authActions from "../actions/auth";
import * as uiActions from "../actions/ui";

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
  };

export default [loadAuthFlow];
