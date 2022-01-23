import logo from './logo.svg';
import './App.css';
import ChatBox from './components/ChatBox';
import UserSelect from './components/UserSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserSelect/>
        <ChatBox selectedUser="Nemo"/>
      </header>
    </div>
  );
}

export default App;
