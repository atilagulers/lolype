import React from 'react';
import {Container} from 'react-bootstrap';
import './Home.scss';
import JoinOrCreate from '../../components/JoinOrCreate/JoinOrCreate';
import JoinForm from '../../components/JoinForm/JoinForm';

function Home() {
  return (
    <Container className="home-form-container">
      <JoinOrCreate />
      {/*<JoinForm />*/}
    </Container>
  );
}

export default Home;
