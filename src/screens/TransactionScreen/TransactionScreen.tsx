import TransactionComponent from '../../components/Transaction'
import { useTransactions } from '../../services/queries'
import classes from './TransactionScreen.module.css'

const TransactionScreen = () => {
  const transactions = useTransactions()

  return (
    <>
      <div className={classes.container}>
        <span>History</span>
        <ul className={classes.list}>
          {transactions.data?.all_transactions.map((transaction, timestamp) => (
            <TransactionComponent key={timestamp} {...transaction} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default TransactionScreen
