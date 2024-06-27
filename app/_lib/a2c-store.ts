import { StateCreator } from "zustand";
import { createStore } from "zustand/vanilla";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  color: string;
  image: string;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, color: string) => void;
  clearCart: () => void;
}

export const createCartStore: StateCreator<CartState> = (set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id && cartItem.color === item.color
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id && cartItem.color === item.color
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (id, color) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === id && item.color === color)
      ),
    })),
  clearCart: () => set({ cart: [] }),
});

export const initCartStore = () => createStore(createCartStore);
