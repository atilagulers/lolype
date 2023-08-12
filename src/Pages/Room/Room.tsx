import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useAppContext} from '../../contexts/AppContext';
import {Col, Row} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {Player, Room as RoomType} from '../../interfaces/interfaces';

function Room() {
  const {socket, setRoom, room} = useAppContext();
  const navigate = useNavigate();
  const {id: roomID} = useParams();

  const [you, setYou] = useState<Player | undefined>(undefined);

  useEffect(() => {
    socket?.on('room-updated', (updatedRoom: RoomType) => {
      setRoom(updatedRoom);
    });

    socket?.on('room-full', () => {
      toast.error('Room is full');
      navigate('/room/join');
    });

    if (!room) {
      navigate('/room/join');
    } else {
      const playerYou = room.players.find(
        (player) => player.socketId === socket?.id
      );
      setYou(playerYou);
    }

    return () => {
      //socket?.disconnect();
    };
  }, [socket, setRoom, navigate, room]);

  return (
    <Row>
      <h1>Room ID: {roomID}</h1>
      <Col>
        <h1>You: {you?.name}</h1>
      </Col>
      <Col>
        <h1>
          Other Player:{' '}
          {room?.players.find((player) => player.socketId !== socket?.id)?.name}
        </h1>
      </Col>
    </Row>
  );
}

export default Room;
