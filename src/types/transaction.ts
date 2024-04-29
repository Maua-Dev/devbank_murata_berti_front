export interface AllTransactions {
  all_transactions: Transaction[]
}

export interface Transaction {
  type: string
  value: number
  current_balance: number
  timestamp: number
}
