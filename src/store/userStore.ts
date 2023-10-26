import { create } from 'zustand'

interface authState {
  authenticate: boolean
  email?: string
  setAuth: (value: boolean, email: string) => void
}

interface storeState {
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  books: any[]
  setBooks: (value: any[]) => void
}

export const userAuth = create<authState>()((set) => ({
  authenticate: false,
  email: '',
  setAuth: (value, value2) => { set((state) => ({ authenticate: value, email: value2 })) }

}))

export const storeData = create<storeState>((set) => ({
  category: '',
  setCategory: (value) => { set((state) => ({ category: value })) },
  search: '',
  setSearch: (value) => { set((state) => ({ search: value })) },
  books: [],
  setBooks: (value) => { set((state) => ({ books: [...value] })) }
}))
