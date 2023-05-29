import css from '../Friends/Friends.module.css'
import PropTypes from 'prop-types'

import { Friend } from '../Friends/Friend'


export const FriendsList = ({ friends }) => {
    return (<ul className={css.friendlist}>
        {friends.map((element)=>(<Friend key={element.id} element={element}/>))}
</ul>)
    
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id:PropTypes.number,
    }))
}