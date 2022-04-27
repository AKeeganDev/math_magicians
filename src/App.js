import { Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route exact path="/math_magicians" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
