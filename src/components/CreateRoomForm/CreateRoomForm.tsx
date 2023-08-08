import React, {useEffect, FormEvent} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAppContext} from '../../contexts/AppContext';
import './CreateRoomForm.scss';
import {useNavigate} from 'react-router-dom';

function CreateRoomForm() {
  const {socket} = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    socket?.on('room-created', (roomId) => {
      console.log(roomId + ' Odasina girdin');
      navigate(`/room/${roomId}`);
    });

    return () => {
      socket?.disconnect();
    };
  }, []);

  const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket?.emit('create-room');
  };

  return (
    <Form onSubmit={handleSubmitCreate}>
      <Form.Group className="mb-5">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Button variant="primary" type="submit" className="btn-gradient-gold">
        Create
      </Button>
    </Form>
  );
}

export default CreateRoomForm;
