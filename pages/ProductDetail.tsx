
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ShieldCheck, Truck, RefreshCcw, Tag, MessageCircle } from 'lucide-react';
import { SAREES } from '../data';
import BookingModal from '../components/BookingModal';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const saree = SAREES.find(s => s.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!saree) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif mb-4">Saree not found</h2>
        <Link to="/products" className="text-bengal-red hover:underline flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Collection
        </Link>
      </div>
    );
  }

  const whatsappNumber = "911238744572";
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in booking the "${saree.name}" saree. Please let me know the availability and if I can see it in person.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors text-sm uppercase tracking-widest font-bold"
        >
            <ArrowLeft size={16} /> Back to Search
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="space-y-4">
                <div className="aspect-[3/4] rounded-sm overflow-hidden bg-stone-100 border border-stone-100">
                    <img 
                        src={saree.images[activeImage]} 
                        alt={saree.name} 
                        decoding="async"
                        className="w-full h-full object-cover transition-opacity duration-500" 
                    />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {saree.images.map((img, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => setActiveImage(idx)}
                            className={`aspect-square rounded-sm overflow-hidden border-2 transition-all bg-stone-100 ${
                                activeImage === idx ? 'border-bengal-red opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                        >
                            <img 
                                src={img} 
                                alt={`View ${idx + 1}`} 
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover" 
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
                <div className="mb-2">
                    <span className="text-bengal-gold font-bold uppercase tracking-[0.2em] text-xs">{saree.type} Collection</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 leading-tight">{saree.name}</h1>
                
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-3xl font-bold text-stone-900">₹{saree.price.toLocaleString()}</span>
                    <div className={`px-3 py-1 text-[10px] uppercase font-bold rounded-full ${
                        saree.availability === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                        {saree.availability}
                    </div>
                </div>

                <div className="p-6 bg-stone-50 border border-stone-100 rounded-sm mb-10">
                    <h3 className="text-xs uppercase font-bold text-stone-500 tracking-widest mb-4">Product Details</h3>
                    <p className="text-stone-700 leading-relaxed text-lg italic font-light">
                        "{saree.description}"
                    </p>
                </div>

                <div className="space-y-4 mb-10">
                    <div className="grid grid-cols-2 gap-y-4 border-t border-b border-stone-100 py-6">
                        <div className="flex items-center gap-3">
                            <Tag size={18} className="text-bengal-gold" />
                            <div>
                                <div className="text-[10px] uppercase text-stone-400 font-bold">Origin</div>
                                <div className="text-sm font-medium text-stone-900">West Bengal</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <RefreshCcw size={18} className="text-bengal-gold" />
                            <div>
                                <div className="text-[10px] uppercase text-stone-400 font-bold">Fabric</div>
                                <div className="text-sm font-medium text-stone-900">Handloom</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={18} className="text-bengal-gold" />
                            <div>
                                <div className="text-[10px] uppercase text-stone-400 font-bold">Authenticity</div>
                                <div className="text-sm font-medium text-stone-900">100% Genuine</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Truck size={18} className="text-bengal-gold" />
                            <div>
                                <div className="text-[10px] uppercase text-stone-400 font-bold">Location</div>
                                <div className="text-sm font-medium text-stone-900">Pune Delivery</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto space-y-4">
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-600 text-white py-5 rounded-sm font-bold text-lg hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-3"
                    >
                        <MessageCircle size={24} /> Book on WhatsApp
                    </a>
                    <button 
                        onClick={() => setShowBooking(true)}
                        className="w-full bg-stone-900 text-white py-5 rounded-sm font-bold text-lg hover:bg-stone-800 transition-all"
                    >
                        Reserve via Form
                    </button>
                    <p className="text-center text-xs text-stone-500">
                        * No online payment. Confirm your booking and we will arrange a visit or delivery in Pune.
                    </p>
                </div>
            </div>
        </div>

        {/* Technical Details */}
        <section className="mt-24">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 pb-4 border-b border-stone-100">Care Instructions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                    <h3 className="font-bold text-stone-900 flex items-center gap-2"><Check size={16} className="text-green-600" /> Dry Clean Recommended</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                        To maintain the integrity of handloom fibers, we strictly recommend professional dry cleaning.
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold text-stone-900 flex items-center gap-2"><Check size={16} className="text-green-600" /> Traditional Storage</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                        Store in a cool, dry place wrapped in a pure cotton cloth to let the silk breathe.
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold text-stone-900 flex items-center gap-2"><Check size={16} className="text-green-600" /> Gentle Ironing</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                        Always use low heat and place a protective cloth between the iron and the saree.
                    </p>
                </div>
            </div>
        </section>
      </div>

      {showBooking && <BookingModal saree={saree} onClose={() => setShowBooking(false)} />}
    </div>
  );
};

export default ProductDetail;
