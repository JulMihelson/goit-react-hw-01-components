import './Friends.css'

import { Friend } from './Friend'
import friends from '../../src/friends.json';

export const FriendsList = ({ avatar, name, isOnline }) => {
    return (<ul className="friend-list">
        {friends.map((element)=>(<Friend key={element.id} element={element}/>))}
</ul>)
    
}

 