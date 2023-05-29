import Profile from "../components/Profile/Profile";
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';
import { Statistics } from "../components/Statistics/Statistics";
import { FriendsList } from "../components/Friends/Friends";
import { TransactionHistory } from "../components/Transactions/TransactionHistory";


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
