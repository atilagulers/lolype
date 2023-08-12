import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import './JoinRoomForm.scss';
import {useAppContext} from '../../contexts/AppContext';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router';
import {Player} from '../../interfaces/interfaces';
import {Room} from '../../interfaces/interfaces';

function JoinRoomForm() {
  const {socket, setRoom} = useAppContext();
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    socket?.on('joined-room', (room: Room) => {
      setRoom(room);
      navigate(`/room/${room.id}`);
    });

    socket?.on('room-full', () => {
      toast.error('Room is full');
      navigate('/room/join');
    });

    socket?.on('room-not-found', (roomID, name) => {
      toast.error('Room not found');
    });

    return () => {
      //socket?.disconnect();
    };
  }, [socket, setRoom, navigate]);

  const handleChangeRoomID = function (e: ChangeEvent<HTMLInputElement>) {
    setRoomID(e.target.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    //setPlayer({...player, name: e.target.value});
  };

  const handleValidation = () => {
    if (roomID.trim() === '') {
      setValidationError('Room ID is required.');
      return false;
    }

    if (name.trim() === '') {
      setValidationError('Name is required.');
      return false;
    }

    setValidationError('');
    return true;
  };

  const handleSubmitJoin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      const player: Player = {
        socketId: socket?.id,
        isHost: true,
        name,
        champion: null,
      };

      socket?.emit('join-room', {roomID, player});
    } else {
      toast.error(validationError);
    }

    setRoomID('');
  };

  return (
    <Form onSubmit={handleSubmitJoin}>
      <Form.Group className="mb-3">
        <Form.Control
          value={roomID}
          onChange={handleChangeRoomID}
          type="text"
          placeholder="Room ID"
        />
      </Form.Group>

      <Form.Group onChange={handleChangeName} className="mb-5">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="btn-gradient-gold"
        disabled={(name && roomID) === '' ? true : false}
      >
        Join
      </Button>
    </Form>
  );
}

export default JoinRoomForm;
