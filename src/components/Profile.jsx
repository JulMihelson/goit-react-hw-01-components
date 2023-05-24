// import user from '../../src/user.json'
import './Profile.css'

export const Profile = ({ username, location, tag, avatar, stats }) => {
    
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <div className="user-info">
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                    <p className="location">{location}</p>
                    </div>
            </div>

            <ul className="stats">
                <li className="stat-type">
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li className="stat-type">
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li className="stat-type">
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;