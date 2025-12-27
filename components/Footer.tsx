
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">SONAR TORI</h2>
          <p className="max-w-md leading-relaxed mb-8">
            Honoring the timeless tradition of Bengali weaving. Every saree in our collection is sourced directly from master weavers in West Bengal. Experience heritage at your doorstep in Pune.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full border border-stone-700 hover:border-bengal-gold hover:text-bengal-gold transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-stone-700 hover:border-bengal-gold hover:text-bengal-gold transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-bengal-gold transition-colors">Our Story</Link></li>
            <li><Link to="/products" className="hover:text-bengal-gold transition-colors">Saree Collection</Link></li>
            <li><Link to="/contact" className="hover:text-bengal-gold transition-colors">Book a Visit</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-bengal-gold shrink-0" />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-bengal-gold shrink-0" />
              <span>+91 1238744572</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-bengal-gold shrink-0" />
              <span>sonar.tori@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} Sonar Tori. Authentic Bengali Heritage.</p>
      </div>
    </footer>
  );
};

export default Footer;
