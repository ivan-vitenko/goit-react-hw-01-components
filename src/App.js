// import logo from "./logo.svg";
import "./App.css";

import Container from "./components/Container/Container";

import Profile from "./components/Profile/Profile";
import userData from "./user.json";

import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./statistical-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <Container>
      <Profile
        avatar={userData.avatar}
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />

      <Statistics statsData={statisticalData} title="Upload stats" />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </Container>
  );
}

export default App;
