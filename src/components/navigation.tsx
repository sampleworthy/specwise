import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { FileJson2, Home, Settings } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link to="/" className="flex items-center gap-2">
              <FileJson2 className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">SpecWise.ai</span>
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                <Home className="h-5 w-5" />
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">
                Dashboard
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}