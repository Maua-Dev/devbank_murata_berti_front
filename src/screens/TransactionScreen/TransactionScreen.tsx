import Transaction from '../../components/Transaction'
import classes from './TransactionScreen.module.css'

export interface Transaction {
  type: string
  value: number
  current_balance: number
  timestamp: number
}

const TransactionScreen = () => {
  // Dummy transactions
  const dummy_transactions: Transaction[] = [
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
      <div className={classes.container}>
        <span>History</span>
        <ul className={classes.list}>
          {dummy_transactions.map((transaction, index) => (
            <Transaction key={index} {...transaction} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default TransactionScreen
