import Profile from "./Profile";
import user from '../../src/user.json';
import data from '../../src/data.json';
import friends from '../../src/friends.json';
import items from '../../src/transactions.json';
import { Statistics } from "./Statistics";
import { FriendsList } from "./Friends";
import { TransactionHistory } from "./TransactionHistory";


export const App = () => {
  return (
    <div
      style={{
       minHeight: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics
        title={"UPLOAD STATS"}
        data={data}
      />
      
      <FriendsList
    avatar={friends.avatar}
    name={friends.name}
    online = {friends.isOnline}/>
    

    <TransactionHistory
   items={items} />
      
      </div>
  );
};
