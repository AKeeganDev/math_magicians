import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
