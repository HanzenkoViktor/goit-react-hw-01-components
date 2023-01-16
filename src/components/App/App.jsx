import { Container, Wrapper } from './App.styled';
import User from '../User/User';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { user, data, friends, transactions } from 'data';

export default function App() {
  return (
    <Container>
      <Wrapper>
        <User
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Wrapper>
    </Container>
  );
}
