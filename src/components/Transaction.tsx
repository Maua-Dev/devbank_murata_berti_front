import cn from 'classnames'
import { Transaction } from '../types/transaction'
import classes from './Transaction.module.css'

const TransactionComponent = ({ type, value }: Transaction) => {
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
export default TransactionComponent
