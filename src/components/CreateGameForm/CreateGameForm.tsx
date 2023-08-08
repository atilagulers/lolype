import React, {FormEvent} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useAppContext} from '../../contexts/AppContext';
import './CreateGameForm.scss';

function CreateGameForm() {
  const {socket} = useAppContext();

  const handleSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(socket?.id);
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

export default CreateGameForm;
