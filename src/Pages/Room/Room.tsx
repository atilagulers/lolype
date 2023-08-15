import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useAppContext} from '../../contexts/AppContext';
import {Container, Row} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {Room as RoomType} from '../../interfaces/interfaces';
import './Room.scss';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import ChampionSelection from '../../components/ChampionSelection/ChampionSelection';
import {Player} from '../../interfaces/interfaces';
import {GameState} from '../../interfaces/enums';

function Room() {
  const {socket, setRoom, room} = useAppContext();
  const navigate = useNavigate();
  const {id: roomID} = useParams();
  const [youPlayer, setYouPlayer] = useState<Player>();
  const [otherPlayer, setOtherPlayer] = useState<Player>();

  useEffect(() => {
    room?.players.forEach((player) => {
      if (player.socketId === socket?.id) setYouPlayer(player);
      else setOtherPlayer(player);
    });

    socket?.on('room-updated', (updatedRoom: RoomType) => {
      setRoom(updatedRoom);
      console.log(updatedRoom.countdown);
      const allPlayersReady = updatedRoom.players.every(
        (player) => player.isReady
      );

      if (
        allPlayersReady &&
        room &&
        room.gameState !== undefined &&
        room.gameState === GameState.Waiting
      ) {
        room.gameState = GameState.ChampionSelection;
        socket?.emit('update-room', room);

        socket?.emit('start-countdown', roomID);
      }
    });

    socket?.on('room-full', () => {
      toast.error('Room is full');
      navigate('/room/join');
    });

    if (!room) {
      navigate('/');
    }

    return () => {
      socket?.off('room-updated');
      socket?.off('room-full');
    };
  }, [socket, setRoom, navigate, room]);

  const handleChangeReady = function () {
    if (!room) {
      toast.error('Room is Empty');
      return;
    }

    const yourPlayerIndex = room.players.findIndex(
      (player) => player.socketId === youPlayer?.socketId
    );

    if (yourPlayerIndex !== -1) {
      room.players[yourPlayerIndex].isReady =
        !room.players[yourPlayerIndex].isReady;

      socket?.emit('update-room', room);
    } else {
      console.log('Player not found');
    }

    socket?.emit('update-room', room);
  };

  if (!room) {
    return <LoadingSpinner />;
  }

  return (
    <Row className="room-container">
      <Row className="mb-5">
        <Row>
          <h1 className="mb-5">Room ID: {roomID}</h1>
        </Row>

        <Row>{otherPlayer && <PlayerCard player={otherPlayer} />}</Row>

        <Row>
          <h1>VS {room?.countdown}</h1>
        </Row>

        <Row>
          {youPlayer && (
            <PlayerCard
              player={youPlayer}
              handleChangeReady={handleChangeReady}
            />
          )}
        </Row>
      </Row>
      <Row>
        <ChampionSelection player={youPlayer} setPlayer={setYouPlayer} />
        {room.gameState === GameState.ChampionSelection && (
          <ChampionSelection player={youPlayer} setPlayer={setYouPlayer} />
        )}
      </Row>
    </Row>
  );
}

export default Room;
