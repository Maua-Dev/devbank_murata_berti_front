import axios from 'axios'
import { Profile } from '../types/profile'

const BASE_URL =
  'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/'

const axiosInstance = axios.create({ baseURL: BASE_URL })

export const getProfile = async () => {
  return (await axiosInstance.get<Profile>('/')).data
}
