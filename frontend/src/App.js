import logo from './logo.svg';
import AboutUs from './pages/Aboutus/aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;