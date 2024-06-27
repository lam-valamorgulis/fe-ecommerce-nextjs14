import { StateCreator } from "zustand";
import { createStore } from "zustand/vanilla";

// export interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   color: string;
//   image: string;
//   quantity: number;
// }

export interface CartState {
  cart: any[];
  sidebarVisible: boolean;

  // addToCart: (item: CartItem) => void;
  addToCart: (item: any) => void;

  removeFromCart: (id: number, color: string) => void;
  clearCart: () => void;
  toggleSidebar: () => void;
}

export const createCartStore: StateCreator<CartState> = (set) => ({
  cart: [],
  sidebarVisible: false,
  toggleSidebar: () =>
    set((state) => ({ sidebarVisible: !state.sidebarVisible })),
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
