/** Profile **/
import Profile from 'components/Profile/Profile';
import user from '../data/user.json'

/** Statistics **/
import Statistics from './Statistics/Statistics';
import data from '../data/data.json'


/** FriendList **/
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json'

/** TransactionHistory **/
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </main>



  );
};
