import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />   
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
