import axios from 'axios'
import { Profile } from '../types/profile'
import { AllTransactions } from '../types/transaction'

const BASE_URL =
  'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/'

const axiosInstance = axios.create({ baseURL: BASE_URL })

export const getProfile = async () => {
  return (await axiosInstance.get<Profile>('/')).data
}

export const getTransactions = async () => {
  return (await axiosInstance.get<AllTransactions>('/history')).data
}

export const createWithdraw = async (data: Banknote) => {
  return await axiosInstance.post('/withdraw', data)
}

export const createDeposit = async (data: Banknote) => {
  return await axiosInstance.post('/deposit', data)
}
