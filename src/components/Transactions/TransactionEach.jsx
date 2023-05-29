import PropTypes from 'prop-types';
export const TransactionEach = ({ item }) => {
  const { type, amount, currency } = item;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionEach.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  }),
};
