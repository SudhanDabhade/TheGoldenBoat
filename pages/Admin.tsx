
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Clock, Phone, Mail, MapPin, Search, Filter, RefreshCw, Trash2, CheckCircle } from 'lucide-react';
import { Booking } from '../types';

const Admin: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Confirmed' | 'Completed'>('All');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shonartori_bookings') || '[]');
    setBookings(data);
  }, []);

  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('shonartori_bookings', JSON.stringify(updated));
  };

  const updateStatus = (id: string, status: Booking['status']) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    setBookings(updated);
    localStorage.setItem('shonartori_bookings', JSON.stringify(updated));
  };

  const filtered = bookings.filter(b => filter === 'All' || b.status === filter);

  return (
    <div className="min-h-screen bg-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h1 className="text-3xl font-serif font-bold text-stone-900">Owner Dashboard</h1>
                <p className="text-stone-500 text-sm">Managing customer reservations & inquiries</p>
            </div>
            <div className="flex gap-2">
                {(['All', 'Pending', 'Confirmed', 'Completed'] as const).map(f => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded text-xs font-bold uppercase transition-all ${
                            filter === f ? 'bg-bengal-red text-white' : 'bg-white text-stone-600 border border-stone-200'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>

        {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
                {filtered.map((booking) => (
                    <div key={booking.id} className="bg-white rounded-sm border border-stone-200 shadow-sm overflow-hidden flex flex-col md:flex-row animate-in fade-in slide-in-from-left-4">
                        <div className="md:w-1/4 p-6 bg-stone-50 border-r border-stone-200 flex flex-col justify-center">
                            <span className="text-[10px] uppercase font-bold text-stone-400 mb-1">Booking ID: {booking.id}</span>
                            <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">{booking.sareeName}</h3>
                            <div className={`text-center py-1 rounded text-[10px] uppercase font-bold w-24 ${
                                booking.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' :
                                'bg-green-100 text-green-700'
                            }`}>
                                {booking.status}
                            </div>
                        </div>

                        <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <ShoppingBag size={16} className="text-stone-400" />
                                    <span className="font-medium">{booking.customerName}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone size={16} className="text-stone-400" />
                                    <span>{booking.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Clock size={16} className="text-stone-400" />
                                    <span className="text-stone-500">{new Date(booking.timestamp).toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail size={16} className="text-stone-400" />
                                    <span>{booking.email || 'No Email provided'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin size={16} className="text-stone-400" />
                                    <span>{booking.deliveryCity}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <RefreshCw size={16} className="text-stone-400" />
                                    <span className="text-stone-500">Contact via: {booking.contactMethod}</span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-2">
                                <button 
                                    onClick={() => updateStatus(booking.id, 'Confirmed')}
                                    className="w-full text-xs font-bold uppercase py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                                >
                                    <CheckCircle size={14} /> Confirm Reservation
                                </button>
                                <button 
                                    onClick={() => updateStatus(booking.id, 'Completed')}
                                    className="w-full text-xs font-bold uppercase py-2 bg-green-50 text-green-700 border border-green-200 rounded hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
                                >
                                    <CheckCircle size={14} /> Mark as Delivered
                                </button>
                                <button 
                                    onClick={() => deleteBooking(booking.id)}
                                    className="w-full text-xs font-bold uppercase py-2 bg-stone-50 text-stone-400 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Trash2 size={14} /> Remove Entry
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="bg-white border border-stone-200 rounded-sm p-20 text-center">
                <div className="text-stone-300 flex justify-center mb-4"><ShoppingBag size={64} /></div>
                <h3 className="text-xl font-serif font-bold text-stone-900">No active bookings</h3>
                <p className="text-stone-500">When customers reserve a saree, they will appear here.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
