
import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Saree, Booking } from '../types';

interface BookingModalProps {
  saree: Saree;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ saree, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    deliveryCity: '',
    contactMethod: 'WhatsApp' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newBooking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        sareeId: saree.id,
        sareeName: saree.name,
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email,
        deliveryCity: formData.deliveryCity,
        contactMethod: formData.contactMethod,
        timestamp: Date.now(),
        status: 'Pending'
      };

      // Store in local storage to simulate "Staff Dashboard"
      const existing = JSON.parse(localStorage.getItem('shonartori_bookings') || '[]');
      localStorage.setItem('shonartori_bookings', JSON.stringify([newBooking, ...existing]));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-sm w-full max-w-md p-8 text-center animate-in zoom-in-95 duration-300">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 className="text-green-600 w-12 h-12" />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Booking Received!</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Thank you, {formData.customerName.split(' ')[0]}. We have received your request for the <strong>{saree.name}</strong>. Our representative will contact you via {formData.contactMethod} shortly to confirm delivery.
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-stone-900 text-white py-3 rounded-sm font-bold hover:bg-stone-800 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-sm w-full max-w-lg overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
        <div className="flex justify-between items-center p-6 border-b border-stone-100 bg-stone-50">
          <div>
            <h2 className="text-xl font-serif font-bold text-stone-900">Reserve Saree</h2>
            <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Direct from Weavers to You</p>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-900 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
            <div className="flex items-center gap-4 mb-8 p-3 bg-stone-50 rounded border border-stone-100">
                <img src={saree.images[0]} alt={saree.name} className="w-16 h-20 object-cover rounded-sm" />
                <div>
                    <span className="text-[10px] uppercase font-bold text-bengal-gold">{saree.type}</span>
                    <h3 className="font-serif text-sm font-bold text-stone-900">{saree.name}</h3>
                    <p className="text-sm font-bold text-bengal-red">₹{saree.price.toLocaleString()}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Full Name *</label>
                    <input 
                        required
                        type="text" 
                        className="w-full px-4 py-2 border border-stone-200 rounded text-sm focus:ring-1 focus:ring-bengal-gold outline-none"
                        value={formData.customerName}
                        onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Phone Number *</label>
                    <input 
                        required
                        type="tel" 
                        placeholder="+91"
                        className="w-full px-4 py-2 border border-stone-200 rounded text-sm focus:ring-1 focus:ring-bengal-gold outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Delivery City *</label>
                    <input 
                        required
                        type="text" 
                        className="w-full px-4 py-2 border border-stone-200 rounded text-sm focus:ring-1 focus:ring-bengal-gold outline-none"
                        value={formData.deliveryCity}
                        onChange={(e) => setFormData({...formData, deliveryCity: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Email (Optional)</label>
                    <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-stone-200 rounded text-sm focus:ring-1 focus:ring-bengal-gold outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
            </div>

            <div className="mt-8">
                <label className="block text-xs font-bold uppercase text-stone-500 mb-3">Preferred Contact Method</label>
                <div className="flex gap-4">
                    {['WhatsApp', 'Phone', 'Email'].map((method) => (
                        <label key={method} className="flex-1 flex items-center justify-center gap-2 p-3 border border-stone-200 rounded cursor-pointer hover:bg-stone-50 transition-colors">
                            <input 
                                type="radio" 
                                name="contactMethod" 
                                value={method}
                                checked={formData.contactMethod === method}
                                onChange={(e) => setFormData({...formData, contactMethod: e.target.value as any})}
                                className="accent-bengal-red"
                            />
                            <span className="text-sm font-medium text-stone-700">{method}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button 
                disabled={isSubmitting}
                className="w-full mt-10 bg-bengal-red text-white py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-red-800 transition-all disabled:opacity-70"
            >
                {isSubmitting ? (
                    <>Processing <Loader2 className="animate-spin" size={20} /></>
                ) : (
                    <>Confirm Reservation <Send size={18} /></>
                )}
            </button>
            <p className="text-center text-[10px] text-stone-400 mt-4 uppercase tracking-widest font-medium">
                No payment required now. Our team will verify availability.
            </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
