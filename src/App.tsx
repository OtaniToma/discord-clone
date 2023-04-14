import React from 'react';
import { useAppSelector } from './app/hooks';
import './App.scss';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';

function App() {

  const user = useAppSelector((state => state.user));
  // const user = null;
  console.log(user);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
