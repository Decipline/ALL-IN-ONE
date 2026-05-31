import { create } from 'zustand'

interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
}

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))
