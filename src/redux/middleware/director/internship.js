import * as directorInternshipActionsons from "../../actions/director/internship";
import * as uiActions from "../../actions/ui";
import { removeState, saveState } from "../../../helpers/Persist.js";
const loadDirectorInternshipFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === directorInternshipActionsons.LOAD_INTERNSHIP_PENDING) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.director.getInternshipPending(action.payload);
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
          if (action.type === directorInternshipActionsons.LOAD_INTERNSHIP_DETAIL) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.director.getInternshipDetail(action.payload);
              dispatch(directorInternshipActionsons.loadInternshipDetailSuccess(respInternship));
              removeState('internship-detail')
              saveState('internship-detail', respInternship.data)
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(directorInternshipActionsons.loadInternshipDetailFailure(error));
            }
          }

          if (action.type === directorInternshipActionsons.CONFIRM_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.director.updateInternshipStatus("confirm",action.payload);
              dispatch(directorInternshipActionsons.confirmInternshipSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(directorInternshipActionsons.confirmInternshipFailure(error));
            }
          }
          if (action.type === directorInternshipActionsons.UN_CONFIRM_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.director.updateInternshipStatus("unconfirm",action.payload);
              dispatch(directorInternshipActionsons.unConfirmInternshipSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(directorInternshipActionsons.unConfirmInternshipFailure(error));
            }
          }
          if (action.type === directorInternshipActionsons.RETURN_INTERNSHIP) {
            try {
              dispatch(uiActions.setLoading(true));
              const respInternship = await api.director.updateInternshipStatus("return",action.payload);
              dispatch(directorInternshipActionsons.returnInternshipSuccess(respInternship));
              dispatch(uiActions.setLoading(false));
            } catch (error) {
              dispatch(directorInternshipActionsons.returnInternshipFailure(error));
            }
          }
        };

export default [loadDirectorInternshipFlow];
