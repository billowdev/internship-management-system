import { PAGE_LOADED } from "../actions/ui";
import * as authActions from "../actions/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import * as internshipActions from "../actions/student/internship"
import * as resumeActions from "../actions/student/resume"
import * as adminLoginActions from "../actions/admin/login"
import * as adminProfileActions from "../actions/admin/profile"
import * as directorActions from "../actions/director/internship"

const pageLoadedFlow =
  ({ log }) =>
    ({ dispatch }) =>
      (next) =>
        (action) => {
          next(action);
          if (action.type === PAGE_LOADED) {
            log("page loaded");
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
            ).then(() => window.location.reload())
          }

          if (action.type === authActions.LOAD_SIGNOUT_SUCCESS) {
            dispatch(authActions.loadAuth)
            log("signout success");
            Swal.fire(
              'สำเร็จ!',
              'ออกจากระบบ...',
              'success'
            ).then(() => {
              localStorage.clear()
              window.location.reload()
            })
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


const internshipFlow =
  ({ log }) =>
    ({ dispatch }) =>
      (next) =>
        (action) => {
          next(action);
          if (action.type === internshipActions.UPDATE_INTERNSHIP_SUCCESS) {
            dispatch(internshipActions.loadInternship)
            Swal.fire(
              'สำเร็จ!',
              'อัปเดตข้อมูลเรียบร้อย',
              'success'
            )
          }

          if (action.type === internshipActions.SEND_INTERNSHIP_SUCCESS) {
            dispatch(internshipActions.loadInternship)
            toast.success('ส่งแบบฟอร์มแล้ว', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (action.type === internshipActions.UNSEND_INTERNSHIP_SUCCESS) {
            dispatch(internshipActions.loadInternship)
            toast.success('ยกเลิกการส่งแบบฟอร์มแล้ว', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        };

const resumeFlow =
  ({ log }) =>
    ({ dispatch }) =>
      (next) =>
        (action) => {
          next(action);
          if (action.type === resumeActions.UPDATE_RESUME_SUCCESS) {
            log('update rusume')
            dispatch(internshipActions.loadInternship)
            Swal.fire(
              'สำเร็จ!',
              'อัปเดตข้อมูลเรียบร้อย',
              'success'
            ).then(() => {
              window.location = "/student/home"
            })

          }
        };

const directorFlow =
  ({ log }) =>
    ({ dispatch }) =>
      (next) =>
        (action) => {
          next(action);
          if (action.type === directorActions.CONFIRM_INTERNSHIP_SUCCESS) {
            dispatch(internshipActions.loadInternship)
            toast.success('อนุมัติแบบฟอร์มแล้ว', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (action.type === directorActions.UN_CONFIRM_INTERNSHIP_SUCCESS) {
            dispatch(internshipActions.loadInternship)
            toast.success('เปลี่ยนสถานะแบบฟอร์มเป็นรออนุมัติ', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (action.type === directorActions.RETURN_INTERNSHIP_SUCCESS) {
            dispatch(internshipActions.loadInternship)
            toast.success('ส่งแบบฟอร์มกลับไปยังนักศึกษาแล้ว', {
              position: "top-right",
              autoClose: 1700,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        };


const adminFlow =
  ({ log }) =>
    ({ dispatch }) =>
      (next) =>
        (action) => {
          next(action);
          if (action.type === adminLoginActions.CREATE_LOGIN_SUCCESS) {
            log('add login user')
            toast.success('เพิ่มข้อมูลผู้ใช้สำเร็จ!', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (action.type === adminLoginActions.CREATE_LOGIN_FAILURE) {
            log('add login user')
            toast.error('เพิ่มข้อมูลผู้ใช้ไม่สำเร็จ โปรดตรวจสอบข้อมูล!', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (action.type === adminLoginActions.UPDATE_LOGIN_SUCCESS) {
            log('update login user')
            toast.success('แก้ไขข้อมูลผู้ใช้สำเร็จ!', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (action.type === adminLoginActions.DELETE_LOGIN_SUCCESS) {
            log('delete login user')
            Swal.fire(
              'สำเร็จ!',
              'ลบข้อมูลเรียบร้อย',
              'success'
            ).then(() => {
              window.location.reload()
            })
          }
          if (action.type === adminProfileActions.UPDATE_STUDENT_PROFILE_SUCCESS) {

            log('delete login user')
            var delayInMilliseconds = 2000;

            toast.success('แก้ไขข้อมูลผู้ใช้สำเร็จ... กำลังกลับไปหน้าจัดการผู้ใช้ทั้งหมด', {
              position: "top-right",
              autoClose: delayInMilliseconds - 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(function () {
              window.location = "/admin/manage/login";
            }, delayInMilliseconds);
          }
        };
export default [pageLoadedFlow, authFlow, internshipFlow, resumeFlow, adminFlow, directorFlow];
