import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import thaiAddresses from './thaiAddresses';
import adminLogin from './admin/login';

export default combineReducers({
    ui,
    auth,
    thaiAddresses,
    adminLogin
})