import * as studentInternshipActionsons from "../../actions/student/internship";
import * as uiActions from "../../actions/ui";
import { saveState } from "../../../helpers/Persist.js";
const loadInternshipFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === studentInternshipActionsons.LOAD_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.student.getInternship();
              dispatch(studentInternshipActionsons.loadInternshipSuccess(respInternship));
              saveState('internship', respInternship.data)
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(studentInternshipActionsons.loadInternshipFailure(error));
            }
          }

        };

export default [loadInternshipFlow];
