import {TransactionEach} from './TransactionEach'

export const TransactionHistory = ({ items }) => {
    return (<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item)=> (TransactionEach key={item.id} item={item}))}
  </tbody>
</table>)
}