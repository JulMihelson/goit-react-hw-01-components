export const TransactionEach = ({ item }) => {
    const { id, type, amount, currency } = item
    return(<tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )}

    