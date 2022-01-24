import React, { useState } from 'react';
import logo from './logo.svg';
import UserSelect from './features/chat/components/UserSelect';
import ChatBox from './features/chat/components/ChatBox';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const handleCallback = function(user) {
    setUser(user);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserSelect parentCallBack={handleCallback}/>
        <ChatBox selectedUser={user}/>
      </header>
    </div>
  );
}

export default App;
