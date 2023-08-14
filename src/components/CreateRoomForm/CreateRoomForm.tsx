import React, {useEffect, FormEvent, useState, ChangeEvent} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAppContext} from '../../contexts/AppContext';
import './CreateRoomForm.scss';
import {useNavigate} from 'react-router-dom';
import {Player} from '../../interfaces/interfaces';

function CreateRoomForm() {
  const {socket, setRoom} = useAppContext();
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    socket?.on('room-created', (room) => {
      setRoom(room);

      navigate(`/room/${room.id}`);
    });

    return () => {
      socket?.off('room-created');
    };
  }, [socket, navigate, setRoom]);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmitCreateRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const player: Player = {
      socketId: socket?.id,
      isHost: true,
      isReady: false,
      name,
      champion: null,
    };

    socket?.emit('create-room', player);
  };

  return (
    <Form onSubmit={handleSubmitCreateRoom}>
      <Form.Group className="mb-5">
        <Form.Control
          onChange={handleChangeName}
          type="text"
          placeholder="Name"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="btn-gradient-gold">
        Create
      </Button>
    </Form>
  );
}

export default CreateRoomForm;
