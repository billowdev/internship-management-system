import {
  LOAD_USERS,
  loadUsersSuccess,
  loadUsersFailure
} from "../actions/users";
import * as uiActions from "../actions/ui";

const loadUsersFlow =

    ({ api }) =>
      ({ dispatch }) =>
        (next) =>
          async (action) => {
            next(action);
            if (action.type === LOAD_USERS) {
              try {
                dispatch(uiActions.setLoading(true));
                const usersData = await api.users.getUsers();
                dispatch(loadUsersSuccess(usersData));
                dispatch(uiActions.setLoading(false));
              } catch (error) {
                dispatch(loadUsersFailure(error));
              }
            }
          };

export default [loadUsersFlow];
