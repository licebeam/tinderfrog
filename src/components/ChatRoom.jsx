import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import ChatRoom from './components/ChatRoom';

const ChatContainer = styled.div`
  margin: 0 auto;
  background-color: black;
  color: white;
  font-size: 2rem;
`
class ChatRoom extends Component {
  render() {
    return (
      <ChatContainer>
        <ChatRoom />
      </ChatContainer>
    );
  }
}

export default ChatRoom;