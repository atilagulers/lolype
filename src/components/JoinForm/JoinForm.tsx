import React, {FormEvent} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAppContext} from '../../contexts/AppContext';
import './JoinForm.scss';

function JoinForm() {
  const {socket} = useAppContext();

  const handleSubmitJoin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(socket?.id);
  };

  return (
    <Form onSubmit={handleSubmitJoin}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Room ID" />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Button variant="primary" type="submit" className="btn-gradient-gold">
        Join
      </Button>
    </Form>
  );
}

export default JoinForm;
