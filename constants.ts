import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'aero',
    name: 'AERO',
    subtitle: 'Compact Size',
    dimensions: '250x250',
    price: 2467,
    rating: 4.8,
    reviews: 42,
    description: 'Eco Luxx AERO is a manually operated shading solution offering simplicity, control, and elegance. Built for outdoor spaces, it delivers functionality without complexity.',
    features: ['Compact Design', 'Manual Operation', 'Weather Resistant'],
    images: [
      '/assets/img/aero-1.jpg',
      '/assets/img/aero-2.jpg',
      '/assets/img/aero-3.jpg'
    ]
  },
  {
    id: 'grove',
    name: 'GROVE',
    subtitle: 'Dining Size',
    dimensions: '250x300',
    price: 2873,
    rating: 4.9,
    reviews: 55,
    description: 'The GROVE edition provides ample space for outdoor dining. Enjoy the shade with our premium louvered roof system designed for modern homes.',
    features: ['Dining Optimized', 'Rain Protection', 'Easy Assembly'],
    images: [
      '/assets/img/grove-1.jpg',
      '/assets/img/grove-2.jpg',
      '/assets/img/grove-3.jpg'
    ]
  },
  {
    id: 'nova',
    name: 'NOVA',
    subtitle: 'Family Size',
    dimensions: '300x300',
    price: 3245,
    rating: 4.7,
    reviews: 38,
    description: 'Perfect for families, the NOVA offers a balanced footprint with robust structural integrity and sleek aesthetics.',
    features: ['Family Sized', 'UV Protection', 'Modular'],
    images: [
      '/assets/img/nova-1.jpg',
      '/assets/img/nova-2.jpg',
      '/assets/img/nova-3.jpg'
    ]
  },
  {
    id: 'vista',
    name: 'VISTA',
    subtitle: 'Lounge Size',
    dimensions: '300x400',
    price: 3920,
    rating: 5.0,
    reviews: 54,
    description: 'Eco Luxx VISTA is our flagship lounge model. It removes the superfluous and restores the authentic value — it’s a pergola that moves with you.',
    features: ['Expansive Shade', 'Premium Finish', 'Integrated Gutter'],
    images: [
      '/assets/img/vista-1.jpg',
      '/assets/img/vista-2.jpg',
      '/assets/img/vista-3.jpg',
      '/assets/img/vista-4.jpg'
    ]
  },
  {
    id: 'grandis',
    name: 'GRANDIS',
    subtitle: 'Grand Saloon',
    dimensions: '600x400',
    price: 5965,
    rating: 5.0,
    reviews: 12,
    description: 'The ultimate statement piece. The GRANDIS features a dual-zone roof system perfect for large patios and commercial spaces.',
    features: ['Dual Zone', 'Max Coverage', 'Commercial Grade'],
    images: [
      '/assets/img/grandis-1.jpg',
      '/assets/img/grandis-2.jpg'
    ]
  }
];