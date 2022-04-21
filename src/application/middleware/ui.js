import { PAGE_LOADED } from "../actions/ui";
import * as authActions from "../actions/auth";
import { toast } from "react-toastify";
import { saveState } from "../../helpers/Persist";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

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

const authFlow =
  ({ log }) =>
    ({ dispatch }) =>
      (next) =>
        (action) => {
          next(action);
          if (action.type === authActions.LOAD_SIGNIN_SUCCESS) {
            Swal.fire(
              'signin!',
              'You clicked the button!',
              'success'
            ).then(()=>window.location.reload())
          }

          if (action.type === authActions.LOAD_SIGNOUT_SUCCESS) {
            dispatch(authActions.loadAuth)
            log("signout success");
            Swal.fire(
              'ออกจากระบบ!',
              'You clicked the button!',
              'success'
            ).then(()=>window.location.reload())
            dispatch(authActions.loadAuth)
          }

          if (action.type === authActions.LOAD_SIGNIN_FAILURE) {
            log("signin failure");
            toast.error('ลงชื่อเข้าใช้ผิดพลาด กรุณาลองใหม่อีกครั้ง!', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }

        };

export default [pageLoadedFlow, authFlow];
