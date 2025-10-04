import { createBrowserRouter } from 'react-router-dom';
import UserLayout from './layouts/user/UserLayout';
import AdminLayout from './layouts/admin/AdminLayout';

import Home from './pages/user/home/Home';
import SeminarApplyInfo from './pages/user/seminar/ApplyInfo';
import SeminarApplyQuestion from './pages/user/seminar/ApplyQuestion';
import SeminarHome from './pages/user/seminar/Home';
import SeminarDetail from './pages/user/seminar/Detail';
import SeminarLive from './pages/user/seminar/Live';
import SeminarReview from './pages/user/seminar/Review';
import SpeakersList from './pages/user/speakers/List';
import SpeakersDetail from './pages/user/speakers/Detail';
import NoticeHome from './pages/user/notice/Home';
import NoticeQna from './pages/user/notice/Qna';
import NoticeInquiry from './pages/user/notice/Inquiry';

import AdminLogin from './pages/admin/login/Login';
import PromoImage from './pages/admin/home-manage/PromoImage';
import Links from './pages/admin/home-manage/Links';
import Reviews from './pages/admin/home-manage/Reviews';
import SeminarCards from './pages/admin/seminar-manage/Cards';
import SeminarManageDetail from './pages/admin/seminar-manage/Detail';
import SeminarAdd from './pages/admin/seminar-manage/Add';
import SeminarApplicantsList from './pages/admin/seminar-manage/applicants/List';
import SeminarApplicantsDetail from './pages/admin/seminar-manage/applicants/Detail';
import SeminarApplicantsQuestions from './pages/admin/seminar-manage/applicants/Questions';
import Attendance from './pages/admin/seminar-live/Attendance';
import Accounts from './pages/admin/auth-manage/Accounts';
import LiveVerification from './pages/user/seminar/LiveVerification';

const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/seminar/apply-info', element: <SeminarApplyInfo /> },
      { path: '/seminar/apply-question', element: <SeminarApplyQuestion /> },
      { path: '/seminar', element: <SeminarHome /> },
      { path: '/seminar/:id', element: <SeminarDetail /> },
      { path: '/seminar/live/verification', element: <LiveVerification /> },
      { path: '/seminar/live', element: <SeminarLive /> },
      { path: '/seminar/review', element: <SeminarReview /> },
      { path: '/speakers', element: <SpeakersList /> },
      { path: '/speakers/:id', element: <SpeakersDetail /> },
      { path: '/notice', element: <NoticeHome /> },
      { path: '/notice/qna', element: <NoticeQna /> },
      { path: '/notice/inquiry', element: <NoticeInquiry /> },
    ],
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    element: <AdminLayout />,
    children: [
      { path: '/admin/home/promo', element: <PromoImage /> },
      { path: '/admin/home/links', element: <Links /> },
      { path: '/admin/home/reviews', element: <Reviews /> },
      { path: '/admin/seminars', element: <SeminarCards /> },
      { path: '/admin/seminars/:id', element: <SeminarManageDetail /> },
      { path: '/admin/seminars/add', element: <SeminarAdd /> },
      { path: '/admin/seminars/applicants', element: <SeminarApplicantsList /> },
      { path: '/admin/seminars/applicants/:id', element: <SeminarApplicantsDetail /> },
      { path: '/admin/seminars/applicants/:id/questions', element: <SeminarApplicantsQuestions /> },
      { path: '/admin/seminar-live/attendance', element: <Attendance /> },
      { path: '/admin/admin-accounts', element: <Accounts /> },
    ],
  },
]);

export default router;
