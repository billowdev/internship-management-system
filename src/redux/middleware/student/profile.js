import * as studentProfileActions from "../../actions/student/profile";
import * as uiActions from "../../actions/ui";
import { saveState } from "../../../helpers/Persist.js";
const loadProfileFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === studentProfileActions.LOAD_PROFILE) {
            try {
              dispatch(uiActions.setLoading(true));
              const respProfile = await api.student.getProfile();
              dispatch(studentProfileActions.loadProfileSuccess(respProfile));
              saveState('profile', respProfile.data)
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(studentProfileActions.loadProfileFailure(error));
            }
          }

        };

export default [loadProfileFlow];
