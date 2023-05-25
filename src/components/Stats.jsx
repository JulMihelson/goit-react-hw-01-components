import css from './Statistics.module.css'

export const Stats = ({ element }) => {
console.log("checking", element);
    const {label, percentage} = element
    return (
        <li className={css.item}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
    </li>)
}