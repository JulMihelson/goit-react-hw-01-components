import items from '../../src/transactions.json';
import css from './TransactionHistory.module.css'

export const TransactionEach = ({ item }) => {
    const { type, amount, currency } = item
    return(<tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )}

    