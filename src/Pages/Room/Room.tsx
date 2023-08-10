import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppContext} from '../../contexts/AppContext';
import {useNavigate} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';
import {Room as RoomType} from '../../interfaces/roomInterfaces';

function Room() {
  const {socket, setRoom, room} = useAppContext();
  const navigate = useNavigate();
  const {id: roomID} = useParams();

  useEffect(() => {
    socket?.on('joined-room', (roomData: RoomType) => {
      setRoom(roomData);
    });

    socket?.on('room-full', ({roomID, name}) => {
      console.log('ROOM IS FULL');
    });

    return () => {
      //socket?.disconnect();
    };
  }, [socket, setRoom]);

  return (
    <Row>
      <h1>Room ID: {roomID}</h1>
      <Col>
        <h1>You: {room?.hostPlayer?.name}</h1>
      </Col>
      <Col>
        <h1>Other Player: {room?.otherPlayer?.name}</h1>
      </Col>
    </Row>
  );
}

export default Room;
