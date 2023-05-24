export const Stats = ({ element }) => {
console.log("checking", element);
    const {label, percentage} = element
    return (
        <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
    </li>)
}