
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Award } from 'lucide-react';
import { SAREES } from '../data';

const Home: React.FC = () => {
  const featured = SAREES.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1920" 
            alt="Bengali Saree Close-up" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h4 className="text-bengal-gold uppercase tracking-[0.4em] font-medium mb-4 text-sm sm:text-base">Sonar Tori</h4>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">Authentic Bengali Sarees <br/>from West Bengal.</h1>
            <p className="text-lg md:text-xl mb-10 text-stone-100 leading-relaxed font-light">
              Exquisite handloom weaves delivered to your doorstep in Pune. Sourced directly from artisans to preserve the soul of Bengal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-bengal-red hover:bg-red-800 text-white px-8 py-4 rounded-sm flex items-center justify-center gap-2 transition-all group shadow-lg">
                Browse Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm flex items-center justify-center transition-all">
                Book a Home Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-stone-100 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=800" alt="Traditional Saree Display" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border-[12px] border-bengal-gold/20 hidden lg:block"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold mb-8 text-stone-900 leading-tight">Our Heritage, Your Home</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  At <strong>Sonar Tori</strong>, we bridge the distance between the vibrant looms of West Bengal and the discerning homes of Pune. Our mission is to provide authentic, high-quality traditional sarees.
                </p>
                <p>
                  We understand the touch and feel of a handloom saree is incomparable. That's why we offer personalized visits to your home, allowing you to experience the texture and richness of our weaves before you decide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col items-center p-4 border border-stone-100 rounded bg-stone-50">
                    <Star className="text-bengal-gold mb-2" />
                    <span className="font-bold text-stone-900">Direct from Weavers</span>
                    <span className="text-xs text-stone-500 text-center">No Middlemen</span>
                </div>
                <div className="flex flex-col items-center p-4 border border-stone-100 rounded bg-stone-50">
                    <Heart className="text-bengal-red mb-2" />
                    <span className="font-bold text-stone-900">Home Service</span>
                    <span className="text-xs text-stone-500 text-center">Available in Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Traditional Masterpieces</h2>
                <div className="w-24 h-1 bg-bengal-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featured.map((saree) => (
                    <Link key={saree.id} to={`/product/${saree.id}`} className="group block bg-white border border-stone-200 rounded-sm overflow-hidden hover:shadow-xl transition-all">
                        <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                            <img src={saree.images[0]} alt={saree.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 text-center">
                            <span className="text-xs uppercase tracking-widest text-bengal-gold font-bold mb-2 block">{saree.type}</span>
                            <h3 className="text-xl font-serif font-semibold text-stone-900 mb-2">{saree.name}</h3>
                            <p className="text-stone-500 text-sm mb-4 line-clamp-2">{saree.description}</p>
                            <span className="text-stone-900 font-bold">₹{saree.price.toLocaleString()}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/products" className="inline-flex items-center gap-2 text-bengal-red font-bold hover:underline">
                    View Entire Collection <ArrowRight size={16} />
                </Link>
            </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-bengal-red text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <Award size={48} className="mx-auto mb-8 text-bengal-gold opacity-80" />
            <h2 className="text-3xl md:text-5xl font-serif font-light italic leading-snug">
                "The quality of the Jamdani saree is unmatched. Having Sonar Tori come home with options made the experience so special."
            </h2>
            <div className="mt-8 text-stone-300 font-medium tracking-widest uppercase text-sm">- Rupa S., Pune</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
