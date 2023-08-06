import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

//import socket from './services/socket';
import socketIOClient from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_API_URL!);

    socket.on('connect', () => {
      console.log('Socket connected');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container className="App">
      <Header />

      <Footer />
    </Container>
  );
}

export default App;
