import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, FileText, MessageCircle, Shield, CreditCard, Award } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqCategories = [
    {
      icon: Clock,
      title: 'Delivery & Turnaround',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      questions: [
        {
          question: 'How long does it take to complete a task?',
          answer: 'Most tasks are delivered within 24 to 72 hours, depending on complexity and urgency. Rush orders are available.'
        },
        {
          question: 'Can I request urgent delivery?',
          answer: 'Yes! We offer express services for tight deadlines—just select your preferred turnaround when submitting your task.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Services Offered',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      questions: [
        {
          question: 'What types of writing do you offer?',
          answer: 'We cover academic essays, research papers, dissertations, resumes, business proposals, creative writing, and technical documentation.'
        },
        {
          question: 'Do you help with programming assignments?',
          answer: 'Absolutely. We support web development, debugging, code reviews, and deployment in languages like Python, JavaScript, TypeScript, and more.'
        },
        {
          question: 'Can you help with both writing and coding in one task?',
          answer: 'Yes, we specialize in interdisciplinary tasks that combine technical writing with programming support.'
        }
      ]
    },
    {
      icon: MessageCircle,
      title: 'Communication & Support',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      questions: [
        {
          question: 'Is there a live chat or support system?',
          answer: 'Yes, our support team is available 24/7 via live chat. You can also message us directly from your dashboard.'
        },
        {
          question: 'Can I talk to the expert handling my task?',
          answer: 'Yes, once your task is assigned, you\'ll be able to communicate securely with your expert.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      questions: [
        {
          question: 'Is my data safe?',
          answer: 'Absolutely. We use end-to-end encryption and never share your information with third parties.'
        },
        {
          question: 'Will my work be original?',
          answer: 'Yes. Every task is custom-written and passes plagiarism checks before delivery.'
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Pricing & Payment',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      questions: [
        {
          question: 'How much does a task cost?',
          answer: 'Pricing depends on complexity, word count, and deadline. You\'ll get an instant quote before confirming.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we have a satisfaction guarantee. If you\'re not happy, we\'ll revise or refund based on our policy.'
        }
      ]
    },
    {
      icon: Award,
      title: 'Results & Experience',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      questions: [
        {
          question: 'How experienced is your team?',
          answer: 'We\'ve helped over 600+ clients in the past 8 years, with a 4.9/5 satisfaction rating.'
        },
        {
          question: 'Can you guarantee good grades or results?',
          answer: 'While we don\'t control grading, our work consistently earns top marks and client praise.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemKey = `${categoryIndex}-${questionIndex}`;
    setOpenItem(openItem === itemKey ? null : itemKey);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-lato">What Our Clients Want to Know</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`${category.bgColor} p-3 rounded-lg mr-4`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-poppins">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const itemKey = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItem === itemKey;
                    
                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                        >
                          <span className="font-semibold text-gray-900 font-lato pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-600 font-lato leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;