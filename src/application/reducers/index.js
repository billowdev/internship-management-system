import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import users from './users';
import adminLogin from './admin/login';

export default combineReducers({
    ui,
    auth,
    users,
    adminLogin
})