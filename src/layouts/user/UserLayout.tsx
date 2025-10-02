import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="w-full max-w-[375px] mx-auto min-h-screen bg-background">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
