import React from 'react';
import { Shield, Users, Clock, Award, CheckCircle, Star, Zap, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Real Human Writers",
      description: "No AI shortcuts. Our team consists of qualified writers with advanced degrees who understand academic standards and deliver personalized, high-quality work.",
      highlight: "100% Human-Written"
    },
    {
      icon: Shield,
      title: "Plagiarism-Free Guarantee",
      description: "Every piece of work is original, custom-written from scratch, and thoroughly checked through multiple plagiarism detection systems before delivery.",
      highlight: "0% Plagiarism"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We understand the importance of deadlines. Our efficient workflow ensures your work is completed and delivered within the agreed timeframe, every time.",
      highlight: "24-72 Hour Turnaround"
    },
    {
      icon: Award,
      title: "Grade Excellence",
      description: "Our work consistently earns top grades. With 8+ years of experience and 1000+ satisfied clients, we know what it takes to achieve academic success.",
      highlight: "4.9/5 Client Rating"
    },
    {
      icon: Zap,
      title: "Expert Support",
      description: "24/7 customer support with direct communication to your assigned writer. Get updates, ask questions, and stay informed throughout the process.",
      highlight: "24/7 Live Support"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving students and professionals worldwide with expertise in various academic systems, citation styles, and international standards.",
      highlight: "Worldwide Service"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Why Choose AcademicPro Hub?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-lato leading-relaxed mb-6">
            Experience the difference of working with real human experts who are committed to your academic success
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold">
            <CheckCircle className="h-5 w-5" />
            <span>No AI, No Shortcuts — Just Real Results</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {reason.highlight}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                      {reason.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 font-lato leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
              Join 1000+ Satisfied Students
            </h3>
            <p className="text-gray-600 font-lato text-lg mb-6">
              Experience the quality and reliability that has made us the trusted choice for academic success
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 font-poppins">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 font-poppins">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 font-poppins">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;