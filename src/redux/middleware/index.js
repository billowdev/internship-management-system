import ui from './ui';
import auth from './auth';
import adminLogin from './admin/login';
import adminProfile from './admin/profile';
import studentInternship from './student/internship';
import studentResume from './student/resume';

export default [
    ...ui,
    ...auth,
    ...adminLogin,
    ...adminProfile,
    ...studentInternship,
    ...studentResume

]