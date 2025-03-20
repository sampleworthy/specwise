import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}