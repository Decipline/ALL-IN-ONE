import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface WishlistItem {
  id: string
  product_id: string
  name: string
  price: number
  original_price: number
  image: string
  discount_percentage: number
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const exists = get().items.find((i) => i.product_id === item.product_id)
        if (!exists) {
          set({ items: [...get().items, item] })
        }
      },
      removeItem: (productId) => {
        set({ items: get().items.filter((i) => i.product_id !== productId) })
      },
      isInWishlist: (productId) => {
        return get().items.some((i) => i.product_id === productId)
      },
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'wishlist-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
