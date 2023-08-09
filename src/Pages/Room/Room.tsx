import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppContext} from '../../contexts/AppContext';
import {useNavigate} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

function Room() {
  const {socket, player} = useAppContext();
  const navigate = useNavigate();
  const {id: roomId} = useParams();

  useEffect(() => {
    console.log('Room: Event handler registered');
    socket?.on('joined-room', ({roomID, name}) => {
      console.log('Room: joined-room event received');
      console.log(name + ', ' + roomID + ' Odasina Girdi');
    });

    return () => {
      //socket?.disconnect();
    };
  }, [socket]);

  return (
    <Row>
      <h1>Room ID: {roomId}</h1>
      <Col>
        <h1>Player 1: {player?.name}</h1>
      </Col>
      <Col>
        <h1>Player 2:</h1>
      </Col>
    </Row>
  );
}

export default Room;
