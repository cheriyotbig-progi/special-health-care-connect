import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { newsroomInfo, WEBSITE_NAME } from '@/lib/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-black text-white tracking-tighter uppercase">Holistic<span className="text-red-600">News</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted source for independent, high-impact journalism from Nairobi and around the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Newsroom</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/category/politics" className="hover:text-red-500 transition-colors">Politics</Link></li>
              <li><Link to="/category/business" className="hover:text-red-500 transition-colors">Business</Link></li>
              <li><Link to="/category/technology" className="hover:text-red-500 transition-colors">Technology</Link></li>
              <li><Link to="/latest" className="hover:text-red-500 transition-colors">Breaking News</Link></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Editorial Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mr-3 shrink-0" />
                <span>{newsroomInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-3 shrink-0" />
                <span>{newsroomInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-3 shrink-0" />
                <span>{newsroomInfo.email}</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Send className="h-4 w-4 mr-2 text-red-600" /> Daily Digest
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Subscribe to get the top stories delivered to your inbox every morning.
            </p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-slate-950 border-none rounded-l-lg py-2 px-3 text-sm w-full focus:ring-1 focus:ring-red-600" />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-lg transition-colors">OK</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase font-bold tracking-widest">
          <p>© 2024 {WEBSITE_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;