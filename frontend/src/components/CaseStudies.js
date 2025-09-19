import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Target,
  Zap
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechStartup Inc.",
      industry: "SaaS Technology",
      challenge: "Manual lead qualification consuming 40+ hours weekly",
      solution: "Implemented AI-powered lead scoring and automated nurturing sequences",
      results: [
        { metric: "Lead Quality", value: "85%", improvement: "+65%", icon: Target },
        { metric: "Time Saved", value: "35 hrs/week", improvement: "87.5%", icon: Clock },
        { metric: "Conversion Rate", value: "24%", improvement: "+180%", icon: TrendingUp },
        { metric: "Revenue Impact", value: "$2.4M", improvement: "+320%", icon: DollarSign }
      ],
      testimonial: "Powermind transformed our entire sales process. We went from drowning in unqualified leads to having a steady stream of high-quality prospects.",
      clientName: "Sarah Johnson",
      clientRole: "VP of Sales",
      timeframe: "3 months",
      color: "blue"
    },
    {
      company: "E-commerce Giant",
      industry: "Retail & E-commerce",
      challenge: "Inefficient customer support and order management processes",
      solution: "Automated customer service workflows and intelligent order routing",
      results: [
        { metric: "Response Time", value: "2 minutes", improvement: "-90%", icon: Clock },
        { metric: "Customer Satisfaction", value: "94%", improvement: "+40%", icon: Users },
        { metric: "Order Processing", value: "500%", improvement: "+400%", icon: Zap },
        { metric: "Cost Reduction", value: "$180K", improvement: "45%", icon: DollarSign }
      ],
      testimonial: "The automation systems handle 80% of our customer inquiries automatically while maintaining exceptional service quality.",
      clientName: "Michael Chen",
      clientRole: "Operations Director",
      timeframe: "2 months",
      color: "green"
    },
    {
      company: "Professional Services Firm",
      industry: "Consulting & Advisory",
      challenge: "Complex project management and client communication bottlenecks",
      solution: "Custom workflow automation and integrated communication systems",
      results: [
        { metric: "Project Efficiency", value: "75%", improvement: "+150%", icon: Target },
        { metric: "Client Communication", value: "98%", improvement: "+45%", icon: Users },
        { metric: "Resource Utilization", value: "89%", improvement: "+60%", icon: TrendingUp },
        { metric: "Profit Margin", value: "42%", improvement: "+28%", icon: DollarSign }
      ],
      testimonial: "Our team now focuses on high-value strategic work instead of administrative tasks. Client satisfaction has never been higher.",
      clientName: "Amanda Rodriguez",
      clientRole: "Managing Partner",
      timeframe: "4 months",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      green: "from-green-50 to-green-100 border-green-200",
      purple: "from-purple-50 to-purple-100 border-purple-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getMetricColor = (color) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="case-studies" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            See how we've helped businesses like yours achieve extraordinary growth through AI automation. 
            These aren't just numbers – they're transformations.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8 sm:space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300">
              <div className={`bg-gradient-to-r ${getColorClasses(study.color)} p-6 sm:p-8`}>
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  {/* Left Column - Company Info */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-white/80 text-gray-700 text-xs sm:text-sm">
                        {study.industry}
                      </Badge>
                      <Badge variant="outline" className="bg-white/60 text-xs sm:text-sm">
                        {study.timeframe} implementation
                      </Badge>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{study.company}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Challenge:</h4>
                        <p className="text-gray-700 text-sm sm:text-base">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Solution:</h4>
                        <p className="text-gray-700 text-sm sm:text-base">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-center text-sm sm:text-base">Key Results</h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-lg ${getColorClasses(study.color)} flex items-center justify-center`}>
                            <result.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${getMetricColor(study.color)}`} />
                          </div>
                          <div className={`text-lg sm:text-2xl font-bold ${getMetricColor(study.color)}`}>
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                          <div className="text-xs text-green-600 font-semibold">
                            {result.improvement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Section */}
              <CardContent className="p-6 sm:p-8">
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <blockquote className="text-base sm:text-lg text-gray-700 italic mb-4">
                    "{study.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{study.clientName}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{study.clientRole}, {study.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join hundreds of businesses that have transformed their operations with our AI automation solutions.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;