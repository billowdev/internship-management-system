import ui from './ui';
import auth from './auth';
import adminLogin from './admin/login';
import studentProfile from './student/profile';
import studentInternship from './student/internship';
import studentResume from './student/resume';

export default [
    ...ui,
    ...auth,
    ...adminLogin,
    ...studentProfile,
    ...studentInternship,
    ...studentResume

]