import create from 'zustand'

export type User = {
  name: string
}

export type UseUserState = {
  user: User
}

export type UseUserActions = {
  setUser: (user: User) => void
}

export type UseUser = UseUserState & UseUserActions

export const useUser = create<UseUser>((set) => ({
  user: {
    name: '',
  },
  setUser: (user) => set(() => ({ user })),
}))
