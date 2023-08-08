import React, {useEffect} from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import JoinGameForm from '../../components/JoinGameForm/JoinGameForm';
import './JoinGame.scss';
import {Container} from 'react-bootstrap';

function JoinGame() {
  return (
    <PageWrapper title={'Join Game'}>
      <Container className="join-game-container">
        <JoinGameForm />
      </Container>
    </PageWrapper>
  );
}

export default JoinGame;
