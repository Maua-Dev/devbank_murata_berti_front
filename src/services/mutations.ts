import { useMutation } from '@tanstack/react-query'
import { createDeposit, createWithdraw } from './api'

export function useCreateWithdraw() {
  return useMutation({
    mutationFn: (data: Banknote) => createWithdraw(data)
  })
}

export function useCreateDeposit() {
  return useMutation({
    mutationFn: (data: Banknote) => createDeposit(data)
  })
}
