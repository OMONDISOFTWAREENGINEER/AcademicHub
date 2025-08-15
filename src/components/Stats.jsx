import React from 'react';
import { Users, Trophy, Clock, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '600+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Trophy,
      number: '8+',
      label: 'Years Experience',
      description: 'Proven track record of excellence'
    },
    {
      icon: Clock,
      number: '24-72h',
      label: 'Fast Delivery',
      description: 'Quick turnaround guaranteed'
    },
    {
      icon: Globe,
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Consistently high satisfaction'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Trusted by Students & Professionals Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-lato">
            Our numbers speak for themselves - delivering quality work that gets results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 transition-all">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-poppins">
                  {stat.number}
                </div>
                
                <div className="text-xl font-semibold text-blue-100 mb-2 font-poppins">
                  {stat.label}
                </div>
                
                <div className="text-blue-200 font-lato">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;