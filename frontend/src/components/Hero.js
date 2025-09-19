import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>Trusted by 500+ Businesses</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Automate Your Business with 
                <span className="text-blue-600 block">AI-Powered Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your operations, boost productivity by 300%, and scale effortlessly with our cutting-edge AI automation systems. Stop wasting time on manual tasks.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">300% Productivity Boost</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">24/7 Automated Systems</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Setup in 7 Days</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200"
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Success Stories
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4 text-center lg:text-left">Trusted by industry leaders:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 opacity-60 max-w-2xl mx-auto lg:mx-0">
                <div className="bg-gray-100 h-10 sm:h-12 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm sm:text-base">TechCorp</span>
                </div>
                <div className="bg-gray-100 h-10 sm:h-12 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm sm:text-base">InnovateLLC</span>
                </div>
                <div className="bg-gray-100 h-10 sm:h-12 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm sm:text-base">ScaleUp Inc</span>
                </div>
                <div className="bg-gray-100 h-10 sm:h-12 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm sm:text-base">GrowthCo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">AI Automation Dashboard</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Real-time monitoring</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">Lead Generation</span>
                      <span className="text-xs text-green-600">+47 new leads</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                      <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-800">Email Sequences</span>
                      <span className="text-xs text-blue-600">92% open rate</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-600 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-800">Task Automation</span>
                      <span className="text-xs text-purple-600">24 tasks completed</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                      <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements - hidden on mobile for better performance */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-12 h-12 lg:w-16 lg:h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Zap className="absolute inset-0 m-auto w-1/2 h-1/2 text-white" />
            </div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="absolute inset-0 m-auto w-1/2 h-1/2 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;