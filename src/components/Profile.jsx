// import user from '../../src/user.json'
import './Profile.css'

export const Profile = ({ username, location, tag, avatar, stats }) => {
    
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt={username}
                    class="avatar"
                />
                <div class="user-info">
                <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                    <p class="location">{location}</p>
                    </div>
            </div>

            <ul class="stats">
                <li class="stat-type">
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                </li>
                <li class="stat-type">
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
                </li>
                <li class="stat-type">
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;