import Profile from "./Profile";
import user from '../../src/user.json';
import Statistics from "./Statistics";
import data from '../../src/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
        title={data.title}
      stats={data.stats}/>
    </div>
  );
};
