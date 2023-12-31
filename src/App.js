import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import { useState } from 'react';
import Home from './pages/home';
import Chat from './pages/chat';

const socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`);

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path='/' element={
            <Home
              username={username}
              setUsername={setUsername}
              room={room}
              setRoom={setRoom}
              socket={socket}
            />
          }
          />
          <Route path={'/chat/:roomId'} element={
            <Chat
              username={username}
              room={room}
              socket={socket}
            />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
