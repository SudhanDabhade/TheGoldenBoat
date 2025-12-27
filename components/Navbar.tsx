
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-bengal-red tracking-tight">SONAR TORI</span>
              <div className="hidden md:block h-6 w-px bg-stone-300 mx-2"></div>
              <span className="hidden md:block text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">Authentic Bengali Weaves</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-stone-600 hover:text-bengal-red transition-colors text-sm font-medium uppercase tracking-wider">Home</Link>
            <Link to="/products" className="text-stone-600 hover:text-bengal-red transition-colors text-sm font-medium uppercase tracking-wider">Collection</Link>
            <Link to="/contact" className="text-stone-600 hover:text-bengal-red transition-colors text-sm font-medium uppercase tracking-wider">Contact</Link>
            <Link to="/admin" className="p-2 text-stone-400 hover:text-bengal-red transition-colors" title="Admin Dashboard">
                <User size={20} />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 py-4 px-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800 py-2">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800 py-2">Collection</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800 py-2">Contact Us</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-800 py-2">Admin View</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
