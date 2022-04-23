import ui from './ui';
import auth from './auth';
import users from './users';


import adminLogin from './admin/login';

export default [
    ...ui,
    ...auth,
    ...users,
    ...adminLogin,

]