import create from 'zustand'

export type User = {
  name: string
}

export type UserState = {
  user: User
}

export type UserActions = {
  setUser: (user: User) => void
}

export type UserStore = UserState & UserActions

const INITIAL_USER_STATE: User = {
  name: '',
}

export const useUser = create<UserStore, any>((set) => ({
  user: INITIAL_USER_STATE,
  setUser: (user) => set(() => ({ user })),
}))
