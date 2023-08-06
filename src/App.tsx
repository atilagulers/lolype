import React from 'react';
import {Container} from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Rammus from './champions/instances/tank/Rammus';

const rammus = new Rammus();

function App() {
  return (
    <Container className="App">
      <Header />
      <ul>
        <li>Name: {rammus.name}</li>
        <li>HP: {rammus.hp}</li>
        <li>MP: {rammus.mp}</li>
        <li>AD: {rammus.ad}</li>
        <li>AP: {rammus.ap}</li>
        <li>AR: {rammus.ar}</li>
        <li>MR: {rammus.mr}</li>
      </ul>
      <Footer />
    </Container>
  );
}

export default App;
