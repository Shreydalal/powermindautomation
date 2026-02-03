import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

// Prefer explicit env var but fallback to localhost dev default
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to n8n webhook
      // Assuming backend accepts these fields. If strict validation on 'service', I might need to add it back hidden.
      const payload = { ...formData, service: 'AI Front Desk Demo', source: 'Website Contact Form' };

      // Update this URL to your n8n webhook
      const WEBHOOK_URL = "https://n8n-1-jr1m.onrender.com/webhook/new-lead";

      const response = await axios.post(WEBHOOK_URL, payload);

      // n8n usually returns 200 OK for successful receipt
      if (response.status === 200) {
        toast.success("Request received! We'll call you shortly.");
        setFormData({
          fullName: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Could not send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="h-4 w-4" />
            <span>See It In Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get Your Free AI Front Desk Demo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Stop losing leads to voicemail. Fill out the form below to see how our system can book appointments for you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Contact Form */}
          <Card className="border-2 border-gray-200 shadow-2xl order-2 lg:order-1">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
                Book Your Demo
              </CardTitle>
              <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
                We'll show you exactly how it works for your industry.
              </p>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email and Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      Company / Clinic Name *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Enter business name"
                      required
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    Phone Number (for call back) *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter phone number"
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    How many calls do you miss per day? (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="e.g. 5-10 calls, mostly on weekends..."
                    rows={3}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending Request...'
                  ) : (
                    <>
                      Book Free Demo
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Contact Info & Benefits */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">

            {/* What to Expect */}
            <Card className="border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2" />
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">We analyze your business</p>
                    <p className="text-xs sm:text-sm text-gray-600">We look at your website and common FAQs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Live Demo Call</p>
                    <p className="text-xs sm:text-sm text-gray-600">We'll let you talk to a demo AI agent live</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Custom Proposal</p>
                    <p className="text-xs sm:text-sm text-gray-600">Tailored pricing based on your call volume</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Fast Setup</p>
                <p className="text-xs text-gray-600">Live in 3-5 days</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">No Risk</p>
                <p className="text-xs text-gray-600">Cancel anytime</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">More Sales</p>
                <p className="text-xs text-gray-600">Catch every lead</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">+91 9099549953</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">hello@powermindautomation.tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;