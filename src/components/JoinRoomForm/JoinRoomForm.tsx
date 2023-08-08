import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAppContext} from '../../contexts/AppContext';
import './JoinRoomForm.scss';
import {useNavigate} from 'react-router-dom';

function JoinRoomForm() {
  const {socket} = useAppContext();
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  const handleChangeRoomID = function (e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value!);
    setRoomID(e.target.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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

  useEffect(() => {
    socket?.on('room-joined', (roomId) => {
      console.log(roomId + ' Odasina girdin');
      navigate(`/room/${roomId}`);
    });

    socket?.on('room-not-found', (roomId) => {
      console.log('ROOM NOT FOUND');
    });

    return () => {
      socket?.disconnect();
    };
  }, []);

  const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket?.emit('create-room');
  };

  const handleSubmitJoin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidation()) {
      socket?.emit('join-room', roomID);
    } else {
      console.log(validationError);
    }
  };

  return (
    <Form onSubmit={handleSubmitJoin}>
      <Form.Group className="mb-3">
        <Form.Control
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
