import { transaction } from '../screens/TransactionScreen/TransactionScreen'

const Transaction = ({ type, value }: transaction) => {
  const border = value < 0 ? 'minus' : 'plus'

  return (
    <li className={border}>
      {type}
      <span>${value}</span>
    </li>
  )
}
export default Transaction
