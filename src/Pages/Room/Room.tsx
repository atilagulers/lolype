import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppContext} from '../../contexts/AppContext';
import {useNavigate} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

function Room() {
  const {socket, player} = useAppContext();
  const [otherPlayer, setOtherPlayer] = useState<string>('');
  const navigate = useNavigate();
  const {id: roomId} = useParams();
  useEffect(() => {
    console.log('registered');

    socket?.on('joined-room', ({roomID, name}) => {
      setOtherPlayer(name);
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
        <h1>Player 2: {otherPlayer}</h1>
      </Col>
    </Row>
  );
}

export default Room;
