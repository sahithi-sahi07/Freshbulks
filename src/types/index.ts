export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}