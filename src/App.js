import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Player } from './pages/Player/Player';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
