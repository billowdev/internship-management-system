import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import adminLogin from './admin/login';

export default combineReducers({
    ui,
    auth,
    adminLogin
})