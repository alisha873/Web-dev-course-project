import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FocusPage from './components/FocusPage/FocusPage';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //enables routing - navigation without reload 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<FocusPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

//navbar is outside routes so that it can appear in all pages 
//new component is rendered instead of reloading the whole page 
//client side routing