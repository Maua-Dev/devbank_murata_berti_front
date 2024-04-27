import { toast } from 'react-toastify'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthSlice {
  apiUrl: string
  // eslint-disable-next-line no-unused-vars
  setApiUrl: (url: string) => void
  authApi: () => boolean
}

const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
  get
) => ({
  apiUrl: '',
  setApiUrl: (url) => set({ apiUrl: url }),
  authApi: () => {
    const currentUrl = get().apiUrl
    const regEx = /^(http|https):\/\/[^ "]+$/
    if (!regEx.test(currentUrl)) {
      toast.error('URL inválida, tente novamente')
      return false
    } else return true
  }
})

const useBoundStore = create<AuthSlice>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a)
    }),
    { name: 'bound-store' }
  )
)

export default useBoundStore
