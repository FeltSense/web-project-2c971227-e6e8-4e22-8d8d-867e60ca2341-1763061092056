'use client';

import { Check, Zap } from 'lucide-react';

const features = [
  'Unlimited voting and ratings',
  'Access to trending analytics',
  'Social discovery features',
  'Share across all platforms',
  'Personalized content feeds',
  'Connect with creators',
  'Real-time notifications',
  'Premium support',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started today and join millions discovering what's trending.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 px-8 py-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold">Premium Plan</h3>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-6xl font-bold">$29</span>
                <span className="text-xl ml-2 text-blue-100">/month</span>
              </div>
              <p className="text-blue-100">Everything you need to stay ahead of trends</p>
            </div>

            <div className="px-8 py-10">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Get Started Now
              </a>

              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>30-day money back</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Trusted by over 5 million users worldwide</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1494790108377 + i * 100000}?w=100&h=100&fit=crop`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-gray-600">+5M more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}