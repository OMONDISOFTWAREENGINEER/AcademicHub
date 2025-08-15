import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-poppins">AcademicPro Hub</span>
            </div>
            <p className="text-gray-300 font-lato leading-relaxed mb-6 max-w-md">
              Your trusted partner for professional academic writing and programming services. With over 8 years of experience, we've helped 600+ students and professionals achieve academic excellence worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-lato">Academic Writing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-lato">Programming Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-lato">Business Writing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-lato">Creative Writing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-lato">Technical Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-lato">Consultation Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-poppins mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 font-lato">support@writecodepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 font-lato">24/7 Live Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 font-lato">Global Service</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold font-poppins mb-3 text-gray-200">Business Hours</h4>
              <p className="text-gray-300 text-sm font-lato">24/7 Customer Support</p>
              <p className="text-gray-300 text-sm font-lato">Fast Response Guarantee</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm font-lato mb-4 md:mb-0">
              © 2025 WriteCode Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors font-lato">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors font-lato">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors font-lato">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;