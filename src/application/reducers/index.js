import { combineReducers } from 'redux';
import ui from './ui';
import auth from './auth';
import users from './users';

export default combineReducers({
    ui,
    auth,
    users,
})