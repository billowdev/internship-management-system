import * as adminProfileActions from "../../actions/admin/profile";
import * as uiActions from "../../actions/ui";
import { saveState } from "../../../helpers/Persist.js";
const loadProfileFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === adminProfileActions.LOAD_STUDENT_PROFILE) {
            try {
              dispatch(uiActions.setLoading(true));
              const respStudentProfile = await api.adminProfile.getStudentProfile(action.payload);
              dispatch(adminProfileActions.loadStudentProfileSuccess(respStudentProfile));
              saveState('student-profile', respStudentProfile.data)
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(adminProfileActions.loadStudentProfileFailure(error));
            }
          }

          if (action.type === adminProfileActions.UPDATE_STUDENT_PROFILE) {
            try {
              dispatch(uiActions.setLoading(true));
              console.log(action.payload)
              const respStudentProfile = await api.adminProfile.updateStudentProfile(action.payload);
              dispatch(adminProfileActions.updateStudentProfileSuccess(respStudentProfile));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(adminProfileActions.updateStudentProfileFailure(error));
            }
          }

        };

export default [loadProfileFlow];
