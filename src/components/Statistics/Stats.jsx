import css from '.././Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ element }) => {
  const { label, percentage } = element;
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};
Stats.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
