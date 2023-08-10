import React, {useEffect, FormEvent, useState, ChangeEvent} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAppContext} from '../../contexts/AppContext';
import './CreateRoomForm.scss';
import {useNavigate} from 'react-router-dom';
import {Player} from '../../interfaces/roomInterfaces';

function CreateRoomForm() {
  const {socket, room, setRoom} = useAppContext();
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      //socket?.disconnect();
    };
  }, []);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const playerData: Player = {
      name,
      champion: 'Rammus',
    };

    socket?.emit('create-room', playerData);

    socket?.on('room-created', (roomID) => {
      const playerData: Player = {
        name,
        champion: 'Rammus',
      };

      socket?.emit('join-room', {roomID, playerData});

      navigate(`/room/${roomID}`);
    });
  };

  return (
    <Form onSubmit={handleSubmitCreate}>
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
