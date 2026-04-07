import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FocusPage from './components/FocusPage/FocusPage';
import TasksPage from './components/TasksPage/TasksPage';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<FocusPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;