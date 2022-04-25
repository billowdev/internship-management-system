import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import adminLogin from './admin/login';
import studentProfile from './student/profile';

export default combineReducers({
    ui,
    auth,
    adminLogin,
    studentProfile
})