import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8 scrollbar-hide">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
