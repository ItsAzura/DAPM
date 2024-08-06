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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
