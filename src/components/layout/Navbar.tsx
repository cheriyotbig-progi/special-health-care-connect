import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Search, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WEBSITE_NAME, categories } from '@/lib/data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <Globe className="h-8 w-8 text-red-600 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-black tracking-tighter uppercase">
                Holistic<span className="text-red-600">News</span>
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-6">
              {categories.map((cat) => (
                <NavLink
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className={({ isActive }) =>
                    `text-sm font-bold uppercase tracking-wider transition-colors hover:text-red-500 ${
                      isActive ? 'text-red-600' : 'text-slate-300'
                    }`
                  }
                >
                  {cat.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-red-600" />
              <input 
                type="text" 
                placeholder="Search news..." 
                className="bg-slate-800 border-none rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-red-600 w-48 transition-all focus:w-64"
              />
            </div>
            <Link to="/latest">
              <Button variant="destructive" className="rounded-full font-bold">LATEST</Button>
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white font-bold text-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800">
            <Link to="/latest" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-red-600 hover:bg-red-700 font-bold">LATEST UPDATES</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;