import { toast } from 'react-toastify'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
  apiUrl: string
  // eslint-disable-next-line no-unused-vars
  setApiUrl: (url: string) => void
  authApi: () => boolean
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      apiUrl: '',
      setApiUrl: (url) => set({ apiUrl: url }),
      authApi: () => {
        const { apiUrl } = useAuthStore.getState()
        const regEx = /^(http|https):\/\/[^ "]+$/
        if (!regEx.test(apiUrl)) {
          toast.error('URL inválida, tente novamente')
          return false
        } else return true
      }
    }),
    {
      name: 'auth store'
    }
  )
)

export default useAuthStore
