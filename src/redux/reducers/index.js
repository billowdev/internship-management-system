import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import adminLogin from './admin/login';
import adminProfile from './admin/profile';
import directorInternship from './director/internship';

export default combineReducers({
    ui,
    auth,
    adminLogin,
    adminProfile,
    directorInternship
})