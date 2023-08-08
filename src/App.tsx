import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import JoinGame from './Pages/JoinGame/JoinGame';
import CreateGame from './Pages/CreateGame/CreateGame';

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
            <Route path="/join" element={<JoinGame />} />
            <Route path="/create" element={<CreateGame />} />
          </Routes>

          <Footer />
        </Router>
      </Container>
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
