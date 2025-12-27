
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { SAREES } from '../data';
import { SareeType } from '../types';

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredSarees = useMemo(() => {
    return SAREES.filter(saree => {
      const matchesSearch = saree.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          saree.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'All' || saree.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const categories = ['All', ...Object.values(SareeType)];

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4 text-center">Our Saree Collection</h1>
            <p className="text-stone-600 text-center max-w-2xl mx-auto">
                Explore the diversity of Bengal handlooms. From the gossamer lightness of Jamdani to the intricate story-weaving of Baluchari.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-4 flex items-center gap-2">
                <Filter size={16} /> Filters
              </h3>
              <div className="space-y-4">
                <div>
                    <label className="text-xs text-stone-500 uppercase font-medium mb-2 block">Search</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                        <input 
                            type="text" 
                            placeholder="Search name or type..." 
                            className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-bengal-gold"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                
                <div>
                    <label className="text-xs text-stone-500 uppercase font-medium mb-2 block">Categories</label>
                    <div className="flex flex-wrap md:flex-col gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedType(cat)}
                                className={`text-left px-3 py-2 rounded text-sm transition-all ${
                                    selectedType === cat 
                                    ? 'bg-bengal-red text-white' 
                                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block p-6 bg-bengal-gold/10 border border-bengal-gold/20 rounded-sm">
                <h4 className="font-serif font-bold text-stone-900 mb-2">Artisan Support</h4>
                <p className="text-xs leading-relaxed text-stone-600">
                    Each purchase supports a weaver family directly. No middlemen, just authentic heritage.
                </p>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-stone-500">{filteredSarees.length} products found</span>
                <div className="flex items-center gap-2 text-sm font-medium text-stone-700">
                    <SlidersHorizontal size={16} />
                    <span>Sort: Default</span>
                </div>
            </div>

            {filteredSarees.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSarees.map((saree) => (
                        <div key={saree.id} className="bg-white border border-stone-100 group">
                            <Link to={`/product/${saree.id}`} className="block relative aspect-[3/4] overflow-hidden bg-stone-200">
                                <img 
                                    src={saree.images[0]} 
                                    alt={saree.name} 
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-0 transition-opacity duration-300"
                                    onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                                />
                                {saree.availability === 'Limited' && (
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm shadow-sm z-10">
                                        Limited Edition
                                    </div>
                                )}
                            </Link>
                            <div className="p-4 border-t border-stone-100">
                                <span className="text-[10px] uppercase tracking-tighter font-bold text-bengal-gold block mb-1">{saree.type}</span>
                                <Link to={`/product/${saree.id}`} className="block font-serif text-lg text-stone-900 hover:text-bengal-red transition-colors mb-2 truncate">
                                    {saree.name}
                                </Link>
                                <div className="flex justify-between items-center">
                                    <span className="text-stone-900 font-bold">₹{saree.price.toLocaleString()}</span>
                                    <Link to={`/product/${saree.id}`} className="text-xs font-bold uppercase tracking-widest text-bengal-red border-b border-bengal-red pb-0.5 hover:text-stone-900 hover:border-stone-900 transition-all">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center">
                    <div className="text-stone-400 mb-4 flex justify-center"><Search size={48} /></div>
                    <h3 className="text-xl font-serif font-bold text-stone-900">No sarees found</h3>
                    <p className="text-stone-500">Try adjusting your filters or search keywords.</p>
                    <button 
                        onClick={() => {setSearchQuery(''); setSelectedType('All');}}
                        className="mt-6 px-6 py-2 bg-stone-900 text-white rounded-sm hover:bg-stone-800"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
