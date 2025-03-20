import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <div className="mt-16 grid max-w-5xl gap-8 mx-auto lg:grid-cols-3">
          {/* Free Tier */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Free</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Perfect for getting started with API validation
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$0</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Up to 5 API validations per month
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Basic validation rules
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Community support
                </li>
              </ul>
            </div>
            <Button className="mt-8" variant="outline">Get started</Button>
          </div>

          {/* Pro Tier */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 lg:rounded-b-none">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Pro</h3>
                <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">Most popular</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                For teams that need advanced validation capabilities
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$29</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Unlimited API validations
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Custom validation rules
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  AI-powered suggestions
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Priority email support
                </li>
              </ul>
            </div>
            <Button className="mt-8">Get started</Button>
          </div>

          {/* Enterprise Tier */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Enterprise</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                For organizations that need advanced security and control
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$99</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Everything in Pro
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Advanced security features
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  24/7 phone & email support
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-blue-600" />
                  Custom integrations
                </li>
              </ul>
            </div>
            <Button className="mt-8" variant="outline">Contact sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}