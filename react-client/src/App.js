import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import UserSelect from './features/chat/components/UserSelect';
import ChatBox from './features/chat/components/ChatBox';
import './App.css';

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
