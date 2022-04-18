import { PAGE_LOADED } from "../actions/ui";
import * as authActions from "../actions/auth";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
      // dispatch(authActions.loadAuth);
    }
  };

export default [pageLoadedFlow];
