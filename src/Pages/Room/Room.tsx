import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppContext} from '../../contexts/AppContext';
import {useNavigate} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

function Room() {
  const {socket} = useAppContext();
  const navigate = useNavigate();
  const {id: roomId} = useParams();

  return (
    <Row>
      <h1>Room ID: {roomId}</h1>
      <Col>
        <h1>Player 1:</h1>
      </Col>
      <Col>
        <h1>Player 2:</h1>
      </Col>
    </Row>
  );
}

export default Room;
