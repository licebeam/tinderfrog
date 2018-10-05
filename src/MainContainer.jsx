import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  background-color: black;
  color: white;
  font-size: 3rem;
  text-align: center;
  height: 100vh;
  width: 100vw;
`
class MainContainer extends Component {
  render() {
    return (
      <Container>
        <div>TEAM TINDER FROG</div>
      </Container>
    );
  }
}

export default MainContainer;