import React from 'react';
import './Home.css';
//import socketIOClient from 'socket.io-client';
import JoinForm from '../../components/JoinForm';

function Home() {
  //const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  //const [inputValue, setInputValue] = useState('');
  //const [roomValue, setRoomValue] = useState('');

  //const [messages, setMessages] = useState<string[]>([]);

  //useEffect(() => {
  //  const newSocket = socketIOClient(process.env.REACT_APP_API_URL!);
  //  setSocket(newSocket);

  //  newSocket.on('connect', () => {
  //    console.log(newSocket.id + 'Socket connected');
  //  });

  //  newSocket.on('receive-message', (message) => {
  //    displayMessage(message);
  //  });

  //  return () => {
  //    newSocket.disconnect();
  //  };
  //}, []);

  //function displayMessage(message: string) {
  //  setMessages((prev) => [...prev, message]);
  //}

  //function handleChangeRoomInput(e: React.ChangeEvent<HTMLInputElement>) {
  //  setRoomValue(e.target.value);
  //}
  //function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
  //  setInputValue(e.target.value);
  //}

  //function handleClickSend() {
  //  socket.emit('send-message', inputValue, roomValue);

  //  displayMessage(inputValue);
  //  setInputValue('');
  //}

  return <JoinForm />;
}

export default Home;
