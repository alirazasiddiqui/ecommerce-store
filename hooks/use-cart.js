import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);
        if (existingItem) {
          return toast.error("Item already exists");
        }
        set({ items: [...currentItem, data] });
        toast.success('Add to cart successfully');
      },
      removeItem: (id) => {
        const currentItem = get().items.filter((item) => item.id !== id);
        set({ items: currentItem });
        toast.success('Removed from cart successfully');
      },
      removeAll: () => {
        set({ items: [] });
        toast.success('Removed all items from cart');
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useCart;
