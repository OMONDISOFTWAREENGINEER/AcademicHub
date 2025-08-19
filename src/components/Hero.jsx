import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Clock, Shield, ArrowRight, Users, Award, Zap, BookOpen, Code, FileText, Lightbulb, TrendingUp, Target, Globe } from 'lucide-react';

const Hero = ({ onGetStarted }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  
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
    },
    {
      text: "No AI shortcuts here - real human writers who understand academic standards. Highly recommended!",
      author: "David K.",
      role: "Master's Student",
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

  const features = [
    {
      icon: Users,
      title: "Real Human Writers",
      description: "No AI, no shortcuts — just experienced writers with advanced degrees"
    },
    {
      icon: Shield,
      title: "100% Plagiarism-Free",
      description: "Every piece is original, custom-written, and thoroughly checked"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Meet your deadlines with our reliable 24-72 hour turnaround"
    },
    {
      icon: Target,
      title: "Grade Guarantee",
      description: "Our work consistently earns top grades and academic recognition"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-600 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-green-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in-up shadow-lg">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Trusted by 1000+ Students Worldwide • 4.9/5 Rating</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins animate-fade-in-up leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mb-2">
              No AI, No Shortcuts
            </span>
            Just Real Writers Delivering
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 block">
              Plagiarism-Free Excellence
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto font-lato leading-relaxed animate-fade-in-up">
            Professional academic writing and programming services by <span className="font-semibold text-blue-600">real human experts</span> with advanced degrees. 
            <span className="font-semibold text-purple-600"> 8+ years of experience</span> helping students achieve academic success with 
            <span className="font-semibold text-green-600"> 100% original, plagiarism-free work</span>.
          </p>

          {/* Key Promise Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl mb-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold font-poppins">100%</div>
                <div className="text-sm opacity-90">Original Work</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-poppins">24-72h</div>
                <div className="text-sm opacity-90">Fast Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-poppins">4.9/5</div>
                <div className="text-sm opacity-90">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-poppins">600+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Service Icons Grid */}
          <div className="mb-8 max-w-5xl mx-auto animate-fade-in-up">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 font-poppins">We Specialize In:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                    <IconComponent className={`h-8 w-8 ${service.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                    <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors block">
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
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Get Expert Help Now</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">4.9/5 Rating</div>
                <div className="text-sm text-gray-600">From 600+ Verified Reviews</div>
              </div>
            </div>
          </div>

          {/* Rotating Feature Highlight */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-4xl mx-auto animate-fade-in-up border">
            <div className="text-center">
              <div className={`bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {React.createElement(features[currentFeature].icon, { 
                  className: "h-8 w-8 text-blue-600" 
                })}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                {features[currentFeature].title}
              </h4>
              <p className="text-gray-600 font-lato text-lg">
                {features[currentFeature].description}
              </p>
            </div>
            
            {/* Feature Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentFeature ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-12 max-w-4xl mx-auto animate-fade-in-up border">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 font-lato italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="font-bold text-gray-900 font-poppins text-lg">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-gray-600 font-lato">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
            
            {/* Testimonial Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-in-up">
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 font-poppins text-lg">100% Original Work</h3>
              <p className="text-gray-600 font-lato leading-relaxed">Every project is custom-written by real humans and plagiarism-free with quality guarantee</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 font-poppins text-lg">Lightning Fast</h3>
              <p className="text-gray-600 font-lato leading-relaxed">24-72 hour delivery with rush options available for urgent academic deadlines</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 font-poppins text-lg">Secure & Private</h3>
              <p className="text-gray-600 font-lato leading-relaxed">Your data is protected with end-to-end encryption and complete confidentiality</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 font-poppins text-lg">Expert Team</h3>
              <p className="text-gray-600 font-lato leading-relaxed">Qualified professionals with advanced degrees in every academic field and industry</p>
            </div>
          </div>

          {/* Final CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-2xl shadow-xl animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                  <Clock className="h-8 w-8 animate-pulse" />
                  <div className="font-bold text-2xl font-poppins">Need Help Today?</div>
                </div>
                <div className="text-lg opacity-90 font-lato">Join hundreds of students who improved their grades this week!</div>
              </div>
              <button 
                onClick={onGetStarted}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Now - It's Free!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;