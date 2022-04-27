import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import NavBar from './Navbar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
