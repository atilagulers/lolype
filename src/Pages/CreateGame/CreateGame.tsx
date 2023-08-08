import React, {useEffect} from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import './CreateGame.scss';
import {Container} from 'react-bootstrap';
import CreateGameForm from '../../components/CreateGameForm/CreateGameForm';

function CreateGame() {
  return (
    <PageWrapper title={'Create Game'}>
      <Container className="create-game-container">
        <CreateGameForm />
      </Container>
    </PageWrapper>
  );
}

export default CreateGame;
