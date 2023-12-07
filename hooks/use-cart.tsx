import { create } from "zustand";
import { Product } from "@/type";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";
interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);
        if (existingItem) {
          return toast("Item already added");
        }
        set({ items: [...get().items, data] });
        toast.success("Item added successfully");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => id !== item.id)] });
        toast.success("Item removed successfully");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
