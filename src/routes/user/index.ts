import React from 'react';
import { Navigate, Outlet, type RouteObject } from 'react-router-dom';
import { STORAGE_KEY } from '../../constants/key';
import { userPublicRoutes } from './UserPublicRoutes';
import { userProtectedRoutes } from './UserProtectedRoutes';

const UserProtectedWrapper = () => {
  const token = localStorage.getItem(STORAGE_KEY.USER_ACCESS_TOKEN);
  return token
    ? React.createElement(Outlet)
    : React.createElement(Navigate, { to: '/seminar/live/verification', replace: true });
};

const UserPublicWrapper = () => {
  const token = localStorage.getItem(STORAGE_KEY.USER_ACCESS_TOKEN);
  return token
    ? React.createElement(Navigate, { to: '/', replace: true })
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
