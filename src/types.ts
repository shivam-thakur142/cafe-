export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'tea' | 'bites' | 'bakery' | 'combos';
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSpecial?: boolean;
  prepTime?: string;
  calories?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  tag: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}
