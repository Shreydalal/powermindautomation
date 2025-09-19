import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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
import { mockContactForm } from '../mock';
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
    service: '',
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
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      // FastAPI validation errors shape: { detail: [ { loc, msg, type, ... } ] }
      const detail = error.response?.data?.detail;
      if (detail) {
        let message = 'Validation error';
        if (typeof detail === 'string') {
          message = detail;
        } else if (Array.isArray(detail)) {
          // Collect messages from validation errors
            const msgs = detail
              .map(item => {
                if (item?.msg && item?.loc) {
                  // loc example: ['body','fullName'] -> pick last segment
                  const field = Array.isArray(item.loc) ? item.loc[item.loc.length - 1] : item.loc;
                  return `${field}: ${item.msg}`;
                }
                return item?.msg || null;
              })
              .filter(Boolean);
            if (msgs.length) message = msgs.join('\n');
        } else if (typeof detail === 'object') {
          // Possibly a single validation error object
          if (detail.msg) message = detail.msg;
        }
        toast.error(message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
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
            <span>Get Started Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Get your free strategy session and discover how AI automation can boost your productivity by 300%. 
            No commitments, just actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Contact Form */}
          <Card className="border-2 border-gray-200 shadow-2xl order-2 lg:order-1">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
                Get Your Free Strategy Session
              </CardTitle>
              <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
                Fill out the form below and we'll contact you within 24 hours
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
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Enter company name"
                      required
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone and Service */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter phone number"
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-semibold text-gray-700">
                      Service Interest *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                      <SelectTrigger className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockContactForm.fields.find(f => f.name === 'service').options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your automation needs and current challenges..."
                    required
                    rows={4}
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
                    'Sending...'
                  ) : (
                    <>
                      Book Free Strategy Session
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Contact Info & Benefits */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Contact Information */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email Us</h4>
                    <p className="text-gray-600 text-sm sm:text-base">hello@powermindautomation.tech</p>
                    <p className="text-xs sm:text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Call Us</h4>
                    <p className="text-gray-600 text-sm sm:text-base">+91 9099549953</p>
                    <p className="text-xs sm:text-sm text-gray-500">Mon - Fri, 9AM - 6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Visit Us</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Vadodara, Gujarat<br />India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Free 45-minute strategy session</p>
                    <p className="text-xs sm:text-sm text-gray-600">Deep dive into your current processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">Custom automation roadmap</p>
                    <p className="text-xs sm:text-sm text-gray-600">Tailored specifically to your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">ROI projections & timeline</p>
                    <p className="text-xs sm:text-sm text-gray-600">Clear expectations and deliverables</p>
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
                <p className="text-xs text-gray-600">7-day implementation</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Guaranteed ROI</p>
                <p className="text-xs text-gray-600">300% productivity boost</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Proven Results</p>
                <p className="text-xs text-gray-600">500+ success stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;