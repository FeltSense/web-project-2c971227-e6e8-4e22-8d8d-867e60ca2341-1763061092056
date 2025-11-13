'use client';

import { Star, Users, TrendingUp, Share2 } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Smart Voting System',
    description: 'Rate and review content with our intuitive voting interface. Your ratings help surface the best content to millions of users worldwide.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Social Discovery',
    description: 'Connect with like-minded users and discover content based on your interests. Follow creators and stay updated with personalized feeds.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: TrendingUp,
    title: 'Trending Analytics',
    description: 'Real-time insights into what\'s hot and what\'s not. Advanced algorithms surface trending topics before they go mainstream.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Share2,
    title: 'Seamless Sharing',
    description: 'Share your favorite discoveries across all social platforms with one click. Build your influence and grow your network effortlessly.',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Modern Discovery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to discover, vote on, and share the best content on the internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}