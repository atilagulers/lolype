import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

//import socket from './services/socket';
import socketIOClient from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const newSocket = socketIOClient(process.env.REACT_APP_API_URL!);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Socket connected');
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  //socket.on('receive-message', (message) => {
  //  console.log(message);
  //});

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleClickSend() {
    socket.emit('send-message', inputValue);
  }

  return (
    <Container className="App">
      <Header />

      <input type="text" onChange={handleChangeInput} />
      <button onClick={handleClickSend}>Send</button>

      <Footer />
    </Container>
  );
}

export default App;
