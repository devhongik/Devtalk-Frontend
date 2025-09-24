import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SeminarApplicants from './pages/admin/seminar-manage/Applicants';
import Attendance from './pages/admin/seminar-live/Attendance';
import Accounts from './pages/admin/auth-manage/Accounts';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 유저 페이지 */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/seminar/apply1" element={<SeminarApplyInfo />} />
          <Route path="/seminar/apply2" element={<SeminarApplyQuestion />} />
          <Route path="/seminar" element={<SeminarHome />} />
          <Route path="/seminar/:id" element={<SeminarDetail />} />
          <Route path="/seminar/live" element={<SeminarLive />} />
          <Route path="/seminar/review" element={<SeminarReview />} />
          <Route path="/speakers" element={<SpeakersList />} />
          <Route path="/speakers/:id" element={<SpeakersDetail />} />
          <Route path="/notice" element={<NoticeHome />} />
          <Route path="/notice/qna" element={<NoticeQna />} />
          <Route path="/notice/inquiry" element={<NoticeInquiry />} />
        </Route>

        {/* 관리자 로그인 (사이드바 등 레이아웃 제외) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 관리자 페이지 */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/home/promo" element={<PromoImage />} />
          <Route path="/admin/home/links" element={<Links />} />
          <Route path="/admin/home/reviews" element={<Reviews />} />
          <Route path="/admin/seminars" element={<SeminarCards />} />
          <Route path="/admin/seminars/:id" element={<SeminarManageDetail />} />
          <Route path="/admin/seminars/add" element={<SeminarAdd />} />
          <Route path="/admin/seminars/applicants" element={<SeminarApplicants />} />
          <Route path="/admin/seminar-live/attendance" element={<Attendance />} />
          <Route path="/admin/admin-accounts" element={<Accounts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;