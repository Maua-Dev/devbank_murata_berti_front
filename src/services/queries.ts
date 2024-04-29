import { useQuery } from '@tanstack/react-query'
import { getProfile, getTransactions } from './api'

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })
}

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions
  })
}
