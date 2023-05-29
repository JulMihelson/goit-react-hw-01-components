import { Stats } from '../Statistics/Stats';
import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ data, title }) => {
  console.log('check', data);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {data.map(element => (
          <Stats key={element.id} element={element} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),  
  title: PropTypes.string,
};

