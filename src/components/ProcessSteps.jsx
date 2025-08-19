import React from 'react';
import { FileText, CreditCard, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Submit Your Task",
      description: "Fill out our simple form with your requirements, deadline, and any specific instructions. Upload relevant files if needed.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CreditCard,
      number: "02", 
      title: "Get Instant Quote",
      description: "Receive a transparent, competitive quote based on your task complexity, word count, and deadline. No hidden fees.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      number: "03",
      title: "Expert Assignment",
      description: "Your task is assigned to a qualified writer with expertise in your subject area. Direct communication available.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Quality Delivery",
      description: "Receive your completed work on time, thoroughly checked for quality and plagiarism. Free revisions included.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed">
            Get expert help in just 4 simple steps. Our streamlined process ensures quality results every time.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                    {/* Step Number */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg font-poppins shadow-lg`}>
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 font-lato leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 text-gray-300">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 font-lato text-lg mb-6">
              Join thousands of students who trust us with their academic success
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Start Your Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;