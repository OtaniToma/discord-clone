import React from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chatMessage'></div>
      <div className='chatInput'></div>
    </div>
  )
}

export default Chat