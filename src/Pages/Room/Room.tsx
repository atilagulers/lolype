import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useAppContext} from '../../contexts/AppContext';
import {Col, Row} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {Room as RoomType} from '../../interfaces/interfaces';
import './Room.scss';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

function Room() {
  const {socket, setRoom, room} = useAppContext();
  const navigate = useNavigate();
  const {id: roomID} = useParams();

  useEffect(() => {
    socket?.on('room-updated', (updatedRoom: RoomType) => {
      setRoom(updatedRoom);
    });

    socket?.on('room-full', () => {
      toast.error('Room is full');
      navigate('/room/join');
    });

    if (!room) {
      navigate('/');
    }

    return () => {
      //socket?.disconnect();
    };
  }, [socket, setRoom, navigate, room]);

  const handleChangeReady = function () {
    if (!room) {
      toast.error('Room is Empty');
      return;
    }

    const updatedRoom: RoomType = {...room};
    const youPlayerIndex = updatedRoom.players?.findIndex(
      (player) => player.socketId === socket?.id
    );

    if (youPlayerIndex !== -1) {
      updatedRoom.players[youPlayerIndex].isReady =
        !updatedRoom.players[youPlayerIndex].isReady;
      socket?.emit('update-room', updatedRoom);
    }
  };

  if (!room) {
    return <LoadingSpinner />;
  }

  const youPlayer = room.players.find(
    (player) => player.socketId === socket?.id
  );
  const otherPlayer = room.players.find(
    (player) => player.socketId !== socket?.id
  );

  return (
    <Row>
      <Row className="mb-5">
        <h1 className="mb-5">Room ID: {roomID}</h1>

        <Col className="player-container">
          {youPlayer && (
            <PlayerCard
              player={youPlayer}
              handleChangeReady={handleChangeReady}
            />
          )}
        </Col>

        <Col className="player-container">
          {otherPlayer && <PlayerCard player={otherPlayer} />}
        </Col>
      </Row>
    </Row>
  );
}

export default Room;
