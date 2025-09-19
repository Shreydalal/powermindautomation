import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, Quote, ArrowRight, Users } from 'lucide-react';
import { mockTestimonials } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Testimonials = () => {
  const [stats, setStats] = useState({
    clientsServed: "500+",
    clientSatisfaction: "98%",
    avgROI: "420%",
    totalAutomatedTasks: "50K+"
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${API}/stats`);
        setStats({
          clientsServed: response.data.clientsServed,
          clientSatisfaction: response.data.clientSatisfaction,
          avgROI: response.data.avgROI,
          totalAutomatedTasks: response.data.totalAutomatedTasks
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        // Keep default stats on error
      }
    };

    fetchStats();
  }, []);
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Don't just take our word for it. Here's what business leaders are saying about their 
            transformation with Powermind Automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {mockTestimonials.slice(0, 6).map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-200 bg-white/70 backdrop-blur-sm relative overflow-hidden h-full flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
              </div>
              
              <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-base flex-grow">
                  "{testimonial.content}"
                </blockquote>

                {/* Results Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="text-sm font-semibold text-green-800 mb-1">Key Result:</div>
                  <div className="text-sm text-green-700">{testimonial.results}</div>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-semibold text-xs sm:text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs sm:text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stats.clientsServed}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">{stats.clientSatisfaction}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">{stats.avgROI}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-2">{stats.totalAutomatedTasks}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Tasks Automated</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Stop wondering "what if" and start experiencing the transformation. 
            Book your free strategy session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Session
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-400 text-gray-300 hover:border-white hover:text-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200"
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View More Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;