import React, {useEffect} from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import './CreateRoom.scss';
import {Container} from 'react-bootstrap';
import CreateRoomForm from '../../components/CreateRoomForm/CreateRoomForm';

function CreateRoom() {
  return (
    <PageWrapper title={'Create Game'}>
      <Container className="create-game-container">
        <CreateRoomForm />
      </Container>
    </PageWrapper>
  );
}

export default CreateRoom;
