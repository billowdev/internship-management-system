import * as directorInternshipActionsons from "../../actions/director/internship";
import * as uiActions from "../../actions/ui";
import { saveState } from "../../../helpers/Persist.js";
const loadDirectorInternshipFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === directorInternshipActionsons.LOAD_INTERNSHIP_PENDING) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.director.getInternshipPending();
              dispatch(directorInternshipActionsons.loadInternshipPendingSuccess(respInternship));
              saveState('internship', respInternship.data)
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(directorInternshipActionsons.loadInternshipPendingFailure(error));
            }
          }
          if (action.type === directorInternshipActionsons.LOAD_INTERNSHIP_CONFIRM) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.director.getInternshipConfirm(action.payload);
              dispatch(directorInternshipActionsons.loadInternshipConfirmSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(directorInternshipActionsons.loadInternshipConfirmFailure(error));
            }
          }
		  if (action.type === directorInternshipActionsons.CONFIRM_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.student.updateInternship(action.payload);
              dispatch(directorInternshipActionsons.updateInternshipSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(directorInternshipActionsons.updateInternshipFailure(error));
            }
          }
        };

export default [loadDirectorInternshipFlow];
