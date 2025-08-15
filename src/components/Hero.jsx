import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Clock, Shield, ArrowRight, Users, Award, Zap, BookOpen, Code, FileText, Lightbulb } from 'lucide-react';

const Hero = ({ onGetStarted }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "AcademicPro Hub helped me achieve a perfect A+ on my research paper. Their attention to detail is incredible!",
      author: "Sarah M.",
      role: "Graduate Student",
      rating: 5
    },
    {
      text: "The programming assistance was outstanding. They debugged my code and explained everything clearly.",
      author: "Mike J.",
      role: "Computer Science Student",
      rating: 5
    },
    {
      text: "Professional, timely, and high-quality work. I've used their services multiple times with excellent results.",
      author: "Emma L.",
      role: "PhD Candidate",
      rating: 5
    }
  ];

  const services = [
    { icon: FileText, name: "Academic Essays", color: "text-blue-600" },
    { icon: BookOpen, name: "Research Papers", color: "text-purple-600" },
    { icon: Code, name: "Programming", color: "text-green-600" },
    { icon: Award, name: "Dissertations", color: "text-orange-600" },
    { icon: Lightbulb, name: "Case Studies", color: "text-red-600" },
    { icon: FileText, name: "Lab Reports", color: "text-indigo-600" },
    { icon: BookOpen, name: "Theses", color: "text-pink-600" },
    { icon: Code, name: "Technical Docs", color: "text-teal-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-bounce-slow"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-purple-100 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-100 rounded-full opacity-25 animate-bounce-slow"></div>

          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <CheckCircle className="h-4 w-4" />
            <span>Trusted by 600+ Students Worldwide</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins animate-fade-in-up">
            Get Expert Help with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
              Academic Writing & Programming
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto font-lato leading-relaxed animate-fade-in-up">
            From essays and research papers to complex programming projects - we deliver excellence that gets results. 
            <span className="font-semibold text-blue-600"> Over 8 years of experience</span> helping students achieve their academic goals with 
            <span className="font-semibold text-purple-600"> 4.9/5 satisfaction rating</span>.
          </p>

          {/* Service Icons Grid */}
          <div className="mb-8 max-w-5xl mx-auto animate-fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <IconComponent className={`h-6 w-6 ${service.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                    <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                      {service.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up">
            <button 
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">4.9/5 Rating</div>
                <div className="text-sm text-gray-600">600+ Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 font-lato italic mb-4">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="font-semibold text-gray-900 font-poppins">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-sm text-gray-600">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
            
            {/* Testimonial Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up">
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 font-poppins">100% Original Work</h3>
              <p className="text-sm text-gray-600 font-lato">Every project is custom-written and plagiarism-free with quality guarantee</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 font-poppins">Lightning Fast</h3>
              <p className="text-sm text-gray-600 font-lato">24-72 hour delivery with rush options available for urgent deadlines</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 font-poppins">Secure & Private</h3>
              <p className="text-sm text-gray-600 font-lato">Your data is protected with end-to-end encryption and confidentiality</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 font-poppins">Expert Team</h3>
              <p className="text-sm text-gray-600 font-lato">Qualified professionals with advanced degrees in every academic field</p>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg animate-fade-in-up">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 animate-pulse" />
              <div className="text-center">
                <div className="font-bold text-lg font-poppins">Need Help Today?</div>
                <div className="text-sm opacity-90">Join hundreds of students who got their grades improved this week!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;