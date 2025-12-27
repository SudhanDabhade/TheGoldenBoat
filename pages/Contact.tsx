
import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-stone-950 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Connect with Sonar Tori</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Experience the finest Bengali weaves in Pune. Reach out for home viewings or inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Contact Cards */}
            <div className="bg-white p-8 border border-stone-200 shadow-xl rounded-sm text-center flex flex-col items-center group hover:border-bengal-gold transition-colors">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">WhatsApp Us</h3>
                <p className="text-stone-500 mb-6 text-sm">For quick inquiries and booking requests.</p>
                <a href="https://wa.me/911238744572" className="text-green-600 font-bold hover:underline">+91 1238744572</a>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-xl rounded-sm text-center flex flex-col items-center group hover:border-bengal-gold transition-colors">
                <div className="w-16 h-16 bg-red-50 text-bengal-red rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Phone size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Call Us</h3>
                <p className="text-stone-500 mb-6 text-sm">Speak directly with our curator for personalized service.</p>
                <a href="tel:+911238744572" className="text-bengal-red font-bold hover:underline">1238744572</a>
            </div>

            <div className="bg-white p-8 border border-stone-200 shadow-xl rounded-sm text-center flex flex-col items-center group hover:border-bengal-gold transition-colors">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Location</h3>
                <p className="text-stone-500 mb-6 text-sm">Serving throughout Pune, Maharashtra.</p>
                <span className="text-blue-600 font-bold">Pune, India</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
            {/* Info and FAQ */}
            <div className="space-y-12">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Home Viewing Service</h2>
                    <p className="text-stone-600 leading-relaxed mb-8">
                        We bring the showroom to you. If you are in Pune, simply shortlist the sarees you love and we will visit your home so you can see the authenticity for yourself before buying.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-stone-700">
                            <Clock size={20} className="text-bengal-gold" />
                            <span>Available daily by appointment</span>
                        </div>
                        <div className="flex items-center gap-4 text-stone-700">
                            <Mail size={20} className="text-bengal-gold" />
                            <span>sonar.tori@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                        <HelpCircle size={24} className="text-bengal-gold" /> Frequently Asked Questions
                    </h3>
                    <div className="space-y-6">
                        <details className="group border-b border-stone-100 pb-4">
                            <summary className="font-bold text-stone-800 cursor-pointer list-none flex justify-between items-center">
                                Are the sarees authentic handloom?
                                <span className="text-stone-400 group-open:rotate-180 transition-transform">+</span>
                            </summary>
                            <p className="text-sm text-stone-500 mt-3 leading-relaxed">
                                Yes, every saree is sourced directly from master weavers in West Bengal. We guarantee 100% authenticity and traditional craftsmanship.
                            </p>
                        </details>
                        <details className="group border-b border-stone-100 pb-4">
                            <summary className="font-bold text-stone-800 cursor-pointer list-none flex justify-between items-center">
                                Do you provide home visits outside Pune?
                                <span className="text-stone-400 group-open:rotate-180 transition-transform">+</span>
                            </summary>
                            <p className="text-sm text-stone-500 mt-3 leading-relaxed">
                                Currently, our home visit service is exclusive to Pune. For other locations, we ship via courier.
                            </p>
                        </details>
                    </div>
                </div>
            </div>

            {/* Visual Identity */}
            <div className="h-[500px] bg-stone-100 rounded-sm border border-stone-200 overflow-hidden relative group">
                 <img 
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Saree Texture" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center p-8 border border-white/30 backdrop-blur-sm">
                        <h2 className="text-white text-3xl font-serif font-bold mb-2 uppercase tracking-widest">Sonar Tori</h2>
                        <p className="text-stone-200 uppercase tracking-widest text-sm font-bold">Pune's Trusted Bengali Saree Source</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
