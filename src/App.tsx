import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from './Pages/Home/Home';
import JoinGame from './Pages/JoinRoom/JoinRoom';
import CreateGame from './Pages/CreateRoom/CreateRoom';
import Room from './Pages/Room/Room';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

import {AppProvider} from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <Container className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/join" element={<JoinGame />} />
            <Route path="/room/create" element={<CreateGame />} />
            <Route path="/room/:id" element={<Room />} />
          </Routes>

          <Footer />
        </Router>
      </Container>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        autoClose={2000}
        transition={Slide}
      />
    </AppProvider>
  );
}

export default App;

// <input type="text" value={roomValue} onChange={handleChangeRoomInput} />

//      <input type="text" value={inputValue} onChange={handleChangeInput} />

//      <button onClick={handleClickSend}>Send</button>
//      <h1>{socket?.id}</h1>
//      <ul>
//        {messages.map((msg: string, i) => (
//          <li key={i}>{msg}</li>
//        ))}
//      </ul>
