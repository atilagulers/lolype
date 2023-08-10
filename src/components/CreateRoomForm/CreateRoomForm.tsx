import React, {useEffect, FormEvent, useState, ChangeEvent} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAppContext} from '../../contexts/AppContext';
import './CreateRoomForm.scss';
import {useNavigate} from 'react-router-dom';

function CreateRoomForm() {
  const {socket, player, setPlayer} = useAppContext();
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    socket?.on('room-created', (roomId) => {
      navigate(`/room/${roomId}`);
    });

    return () => {
      //socket?.disconnect();
    };
  }, []);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setPlayer({...player, name: e.target.value});
  };

  const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket?.emit('create-room');
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
