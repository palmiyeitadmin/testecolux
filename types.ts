export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  dimensions: string;
  description: string;
  features: string[];
  images: string[];
  reviews: number;
  rating: number;
}

export enum ControlType {
  MANUAL = 'Manual',
  MOTORIZED = 'Motorized'
}

export enum ColorOption {
  WHITE = 'White',
  GREY = 'Grey',
  BLACK = 'Black'
}

export interface CartItem {
  product: Product;
  quantity: number;
  config: {
    control: ControlType;
    color: ColorOption;
  };
}