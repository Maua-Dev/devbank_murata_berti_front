import cn from 'classnames'
import { transaction } from '../screens/TransactionScreen/TransactionScreen'
import classes from './Transaction.module.css'

const Transaction = ({ type, value }: transaction) => {
  return (
    <li
      className={cn({
        [classes.transaction]: true,
        [classes.plus]: type === 'deposit',
        [classes.minus]: type === 'withdraw'
      })}
    >
      {type}
      <h2>${value}</h2>
    </li>
  )
}
export default Transaction
