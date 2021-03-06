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
          if (action.type === studentInternshipActionsons.UPDATE_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.student.updateInternship(action.payload);
              dispatch(studentInternshipActionsons.updateInternshipSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(studentInternshipActionsons.updateInternshipFailure(error));
            }
          }

          if (action.type === studentInternshipActionsons.SEND_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.student.updateInternshipStatus("send", action.payload);
              dispatch(studentInternshipActionsons.sendInternshipSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(studentInternshipActionsons.sendInternshipFailure(error));
            }
          }
          if (action.type === studentInternshipActionsons.UNSEND_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.student.updateInternshipStatus("unsend", action.payload);
              dispatch(studentInternshipActionsons.unsendInternshipSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(studentInternshipActionsons.unsendInternshipFailure(error));
            }
          }

        };

export default [loadInternshipFlow];
