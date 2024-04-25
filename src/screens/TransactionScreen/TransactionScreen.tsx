import Transaction from '../../components/Transaction'

export type transaction = {
  type: string
  value: number
  current_balance: number
  timestamp: number
}

const TransactionScreen = () => {
  // Dummy transactions
  const transactions: transaction[] = [
    {
      type: 'deposit',
      value: 100.0,
      current_balance: 1000.0,
      timestamp: 1690482853890
    },
    {
      type: 'withdraw',
      timestamp: 1691707985704.6152,
      current_balance: 700.0,
      value: 300
    },
    {
      type: 'deposit',
      current_balance: 710.0,
      timestamp: 1691707990727.101,
      value: 10
    },
    {
      type: 'withdraw',
      timestamp: 1691707994750.5022,
      current_balance: 680.0,
      value: 30
    }
  ]
  return (
    <>
      <h3>Expense History</h3>
      <ul className="list">
        {transactions.map((transaction, index) => (
          <Transaction key={index} {...transaction} />
        ))}
      </ul>
    </>
  )
}

export default TransactionScreen
