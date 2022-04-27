import { Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </div>
  );
}

export default App;
