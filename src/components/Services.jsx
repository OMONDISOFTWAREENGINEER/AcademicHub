import React from 'react';
import { FileText, Code, BookOpen, Briefcase, Lightbulb, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Academic Writing',
      description: 'Essays, research papers, dissertations, and thesis writing with academic excellence.',
      features: ['APA/MLA/Harvard formatting', 'Peer-reviewed sources', 'Plagiarism-free guarantee']
    },
    {
      icon: Code,
      title: 'Programming Solutions',
      description: 'Web development, debugging, code reviews, and deployment in multiple languages.',
      features: ['JavaScript, Python, Java', 'Web & mobile apps', 'Code optimization']
    },
    {
      icon: Briefcase,
      title: 'Business Writing',
      description: 'Professional proposals, reports, presentations, and business documentation.',
      features: ['Executive summaries', 'Market analysis', 'Financial reports']
    },
    {
      icon: BookOpen,
      title: 'Creative Writing',
      description: 'Storytelling, content creation, copywriting, and creative project development.',
      features: ['Blog posts & articles', 'Marketing copy', 'Creative narratives']
    },
    {
      icon: Database,
      title: 'Technical Documentation',
      description: 'API documentation, user manuals, system specifications, and technical guides.',
      features: ['API documentation', 'User guides', 'System architecture']
    },
    {
      icon: Lightbulb,
      title: 'Consultation Services',
      description: 'One-on-one guidance, project planning, and strategic advice for your goals.',
      features: ['Project planning', 'Strategy development', 'Expert mentoring']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato">
            From academic papers to complex programming projects, we deliver excellence across all disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 font-lato leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;