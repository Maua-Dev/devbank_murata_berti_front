import { create } from 'zustand'

interface AuthStore {
  apiUrl: string
  isValidApi: boolean
  // eslint-disable-next-line no-unused-vars
  setApiUrl: (url: string) => void
  authApi: () => boolean
}

const useAuthStore = create<AuthStore>((set) => ({
  apiUrl: '',
  isValidApi: false,
  setApiUrl: (url) => set({ apiUrl: url }),
  authApi: () => {
    const { apiUrl } = useAuthStore.getState()
    const regEx = /^(http|https):\/\/[^ "]+$/
    const isValid = regEx.test(apiUrl)
    useAuthStore.setState({ isValidApi: isValid })
    return isValid
  }
}))

export default useAuthStore
