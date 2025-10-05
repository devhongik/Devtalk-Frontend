import React from 'react';
import { Navigate, Outlet, type RouteObject } from 'react-router-dom';
import { STORAGE_KEY } from '../../constants/key';
import { adminPublicRoutes } from './AdminPublicRoutes';
import { adminProtectedRoutes } from './AdminProtectedRoutes';

const AdminProtectedWrapper = () => {
  const token = localStorage.getItem(STORAGE_KEY.ADMIN_ACCESS_TOKEN);
  return token
    ? React.createElement(Outlet)
    : React.createElement(Navigate, { to: '/admin/login', replace: true });
};

const AdminPublicWrapper = () => {
  const token = localStorage.getItem(STORAGE_KEY.ADMIN_ACCESS_TOKEN);
  return token
    ? React.createElement(Navigate, { to: '/admin/home/promo', replace: true })
    : React.createElement(Outlet);
};

export const adminRoutes = [
  {
    path: '/admin/login', // 공개 경로
    element: React.createElement(AdminPublicWrapper),
    children: adminPublicRoutes,
  },
  {
    path: '/admin', // 보호된 경로
    element: React.createElement(AdminProtectedWrapper),
    children: adminProtectedRoutes,
  },
] satisfies RouteObject[];
