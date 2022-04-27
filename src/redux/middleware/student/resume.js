import * as studentResumeActions from "../../actions/student/resume";
import * as uiActions from "../../actions/ui";
import { saveState } from "../../../helpers/Persist.js";
const loadResumeFlow =
	({ api }) =>
		({ dispatch }) =>
			(next) =>
				async (action) => {
					next(action);
					if (action.type === studentResumeActions.LOAD_RESUME) {
						try {
							dispatch(uiActions.setLoading(true));
							const respReusume = await api.student.getResume();
							dispatch(studentResumeActions.loadResumeSuccess(respReusume));
							saveState('resume', respReusume.data)
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							dispatch(studentResumeActions.loadResumeFailure(error));
						}
					}
					if (action.type === studentResumeActions.UPDATE_RESUME) {
						try {
							dispatch(uiActions.setLoading(true));
							const respReusume = await api.student.updateResume(action.payload);
							dispatch(studentResumeActions.updateResumeSuccess(respReusume));
							dispatch(studentResumeActions.loadResume)
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							dispatch(studentResumeActions.updateResumeFailure(error));
						}
					}
				};

export default [loadResumeFlow];
