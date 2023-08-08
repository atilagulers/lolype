import React, {useEffect} from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import JoinRoomForm from '../../components/JoinRoomForm/JoinRoomForm';
import './JoinRoom.scss';
import {Container} from 'react-bootstrap';

function JoinRoom() {
  return (
    <PageWrapper title={'Join Game'}>
      <Container className="join-game-container">
        <JoinRoomForm />
      </Container>
    </PageWrapper>
  );
}

export default JoinRoom;
