import * as uploadActions from "../actions/upload";
import * as uiActions from "../actions/ui";

const uploadFlow =
	({ api }) =>
		({ dispatch }) =>
			(next) =>
				async (action) => {
					next(action);
					if (action.type === uploadActions.UPLOAD_IMAGE) {
						try {
							dispatch(uiActions.setLoading(true));
							const uploadResp = await api.upload.uploadStudentImages(action.payload);
							dispatch(uploadActions.uploadImageSuccess(uploadResp));
							dispatch(uiActions.setLoading(false));
						} catch (error) {
							dispatch(uploadActions.uploadImageFailure(error));
						}
					}
				};

export default [uploadFlow];
