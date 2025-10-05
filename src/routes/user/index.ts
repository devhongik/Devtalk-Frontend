import React from 'react';
import { Navigate, Outlet, type RouteObject } from 'react-router-dom';
import { STORAGE_KEY } from '../../constants/key';
import { userPublicRoutes } from './UserPublicRoutes';
import { userProtectedRoutes } from './UserProtectedRoutes';

// 토큰 없는 채로 protected로 이동 시, 인증화면(/seminar/live/verification)으로 이동
const UserProtectedWrapper = () => {
  const token = localStorage.getItem(STORAGE_KEY.USER_ACCESS_TOKEN);
  return token
    ? React.createElement(Outlet)
    : React.createElement(Navigate, { to: '/seminar/live/verification', replace: true });
};

// 토큰 있는 채로 인증화면 (/seminar/live/verification) 아동 시, /seminar/live로 이동
const UserPublicWrapper = () => {
  const token = localStorage.getItem(STORAGE_KEY.USER_ACCESS_TOKEN);
  return token
    ? React.createElement(Navigate, { to: '/seminar/live', replace: true })
    : React.createElement(Outlet);
};

export const userRoutes = [
  {
    path: '/',
    children: [
      { element: React.createElement(UserPublicWrapper), children: userPublicRoutes },
      { element: React.createElement(UserProtectedWrapper), children: userProtectedRoutes },
    ],
  },
] satisfies RouteObject[];
