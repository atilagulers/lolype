import React from 'react';
import {Button, Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

import './JoinOrCreate.scss';

function JoinOrCreate() {
  const navigate = useNavigate();

  function handleClickJoin() {
    navigate('join');
  }

  function handleClickCreate() {
    navigate('create');
  }

  return (
    <Container className="join-or-create-container">
      <Button onClick={handleClickJoin} className="btn-gradient-gold mb-5">
        Join Game
      </Button>
      <Button onClick={handleClickCreate} className="btn-gradient-gold">
        Create Game
      </Button>
    </Container>
  );
}

export default JoinOrCreate;
