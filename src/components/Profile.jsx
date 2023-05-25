// import user from '../../src/user.json'
import PropTypes from 'prop-types'
import css from './Profile.module.css'

export const Profile = ({ username, location, tag, avatar, stats }) => {
    
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <div className={css.userinfo}>
                <p className={css.Profilename}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                    <p className={css.location}>{location}</p>
                    </div>
            </div>

            <ul className={css.stats}>
                <li className={css.stattype}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.stattype}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.stattype}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}
export default Profile;