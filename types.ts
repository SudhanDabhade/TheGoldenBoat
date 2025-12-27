
export enum SareeType {
  JAMDANI = 'Jamdani',
  TANT = 'Tant',
  BALUCHARI = 'Baluchari',
  KANTHA = 'Kantha Stitch',
  GARAD = 'Garad Silk',
  TUSSAR = 'Tussar'
}

export interface Saree {
  id: string;
  name: string;
  type: SareeType;
  material: string;
  color: string;
  price: number;
  description: string;
  availability: 'In Stock' | 'Limited' | 'Sold Out';
  images: string[];
}

export interface Booking {
  id: string;
  sareeId: string;
  sareeName: string;
  customerName: string;
  phone: string;
  email?: string;
  deliveryCity: string;
  contactMethod: 'WhatsApp' | 'Phone' | 'Email';
  timestamp: number;
  status: 'Pending' | 'Confirmed' | 'Completed';
}
