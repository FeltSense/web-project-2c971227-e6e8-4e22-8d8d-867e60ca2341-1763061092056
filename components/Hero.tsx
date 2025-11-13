'use client';

import { TrendingUp, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={
          {
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <TrendingUp className="w-5 h-5 text-blue-300" />
            <span className="text-white text-sm font-medium">Trending #1 on Social Discovery</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Discover What's
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Trending Now
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join millions who vote, share, and discover the hottest content across the web. Your voice shapes what's next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-2xl"
            >
              Explore Features
            </a>
          </div>

          <div className="pt-12 flex items-center justify-center space-x-12 text-white">
            <div>
              <div className="text-4xl font-bold">5M+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div>
              <div className="text-4xl font-bold">50M+</div>
              <div className="text-blue-200">Votes Cast</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div>
              <div className="text-4xl font-bold">4.9★</div>
              <div className="text-blue-200">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}