import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileCheck, Shield, Sparkles, FileJson } from 'lucide-react';

export function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Validate OpenAPI Specs with Confidence
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          SpecWise.ai helps you validate and improve your OpenAPI specifications
          with AI-powered insights and industry best practices.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/signup">
            <Button size="lg">Start Validating for Free</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-lg bg-blue-100 p-3">
              <FileCheck className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-6 text-lg font-semibold">Instant Validation</h3>
            <p className="mt-2 text-gray-600">
              Upload your OpenAPI specs and get immediate feedback on potential issues.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-lg bg-green-100 p-3">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-6 text-lg font-semibold">Custom Rule Sets</h3>
            <p className="mt-2 text-gray-600">
              Create and manage custom validation rules tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-lg bg-purple-100 p-3">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-6 text-lg font-semibold">AI-Powered Fixes</h3>
            <p className="mt-2 text-gray-600">
              Get intelligent suggestions to fix issues in your specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}