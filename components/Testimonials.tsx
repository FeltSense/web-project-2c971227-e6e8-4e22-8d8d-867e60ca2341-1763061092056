'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    company: 'Digital Media Co',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    quote: 'TechVote transformed how I discover trending content. The voting system is incredibly intuitive and the community is amazing!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'StartupXYZ',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    quote: 'We use TechVote to stay ahead of trends. The analytics are spot-on and have helped us increase engagement by 300%.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Social Media Manager',
    company: 'Brand Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    quote: 'The social discovery features are unmatched. I\'ve connected with so many like-minded professionals through this platform.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Tech Enthusiast',
    company: 'Freelance',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    quote: 'Best content discovery app I\'ve ever used. The trending algorithm actually works and shows me stuff I care about.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Influencer',
    company: 'ThompsonMedia',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    quote: 'TechVote helped me grow my audience by 500%. The sharing features are seamless and the community engagement is incredible.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    company: 'Tech Innovations',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    quote: 'We rely on TechVote for market research. The real-time voting data gives us insights we can\'t get anywhere else.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Millions of Users
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our community has to say about their experience with TechVote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-blue-100"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-blue-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}