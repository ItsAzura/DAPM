import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../src/Home.jsx';
import ListProfile from '../pages/user/Profile/ListProfile.jsx';
import Profile from '../pages/user/Profile/Profile.jsx';
import UpdateProfile from '../pages/user/Profile/UpdateProfile.jsx';
import PlanTT from '../pages/user/Plan/PlanTT.jsx';
import PlanKTVP from '../pages/user/Plan/PlanKTVP.jsx';
import PlanTT_Report from '../pages/user/Plan/PlanTT_Report.jsx';
import PlanKTVP_Report from '../pages/user/Plan/PlanKTVP_Report.jsx';
import CreateReport from '../pages/user/Report/CreateReport.jsx';
import CreatePDF from '../pages/user/Report/createPDF.jsx';
import Report_violation from '../pages/user/Violation/Report_violation.jsx';
import Approve from '../pages/user/ManagerUser/Approve.jsx';
import MangerUser from '../pages/user/ManagerUser/MangerUser.jsx';
import SearchUser from '../pages/user/SearchUser/SearchUser.jsx';
import Register_ATTP from '../pages/user/ATTP/Register_ATTP.jsx';
import PlanKTVP_History from '../pages/user/Plan/PlanKTVP_History.jsx';
import PlanTT_History from '../pages/user/Plan/PlanTT_History.jsx';
import ListNews from '../pages/user/News/ListNews.jsx';
import CreateNews from '../pages/user/News/CreateNews.jsx';
import Propose_report from '../pages/user/Violation/propose_report.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/listProfile" element={<ListProfile />} />
      <Route path="/facility/:id" element={<Profile />} />
      <Route path="/updateProfile/:id" element={<UpdateProfile />} />
      <Route path="/PlanThanhTra" element={<PlanTT />} />
      <Route path="/PlanKiemTra" element={<PlanKTVP />} />
      <Route path="/ReportTT" element={<PlanTT_Report />} />
      <Route path="/ReportKTVP" element={<PlanKTVP_Report />} />
      <Route path="/createReport/:id" element={<CreateReport />} />
      <Route path="/createPDF/:id" element={<CreatePDF />} />
      <Route path="/Report_violation" element={<Report_violation />} />
      <Route path="/Approve" element={<Approve />} />
      <Route path="/MangerUser" element={<MangerUser />} />
      <Route path="/SearchUser" element={<SearchUser />} />
      <Route path="/Register_ATTP" element={<Register_ATTP />} />
      <Route path="/PlanKTVP_History" element={<PlanKTVP_History />} />
      <Route path="/PlanTT_History" element={<PlanTT_History />} />
      <Route path="/ListNews" element={<ListNews />} />
      <Route path="/CreateNews" element={<CreateNews />} />
      <Route path="/propose_report" element={<Propose_report />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
