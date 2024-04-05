// Places state and any function that updates that state
import { create } from 'zustand'

type AuthStore = {
  apiUrl: string
  isValidApi: boolean
  setApiUrl: (url: string) => void
  authApi: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  apiUrl: '',
  isValidApi: false,

  setApiUrl: (url) => set({ apiUrl: url }),

  authApi: () => {
    const { apiUrl } = useAuthStore.getState()
    const apiRegex = /^(http|https):\/\/[^ "]+$/
    const isValid = apiRegex.test(apiUrl)
    set({ isValidApi: isValid })
  }
}))

export default useAuthStore
