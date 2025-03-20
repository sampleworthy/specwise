import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="mt-8">
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Drag and drop your OpenAPI specification file here, or
            </p>
            <Button className="mt-2">
              Select File
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}