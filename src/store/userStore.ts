import { create } from 'zustand'

interface authState {
  authenticate: boolean
  email?: string
  setAuth: (value: boolean, email: string) => void
}

export const userAuth = create<authState>()((set) => ({
  authenticate: false,
  email: '',
  setAuth: (value, value2) => { set((state) => ({ authenticate: value, email: value2 })) }

}))
