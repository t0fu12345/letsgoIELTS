import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ListeningRoom from './pages/ListeningRoom';
import ReadingRoom from './pages/ReadingRoom';
import WritingRoom from './pages/WritingRoom';
import SpeakingRoom from './pages/SpeakingRoom';
import Statistic from './pages/Statistic';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/listening" element={<ProtectedRoute><ListeningRoom /></ProtectedRoute>} />
        <Route path="/reading" element={<ProtectedRoute><ReadingRoom /></ProtectedRoute>} />
        <Route path="/writing" element={<ProtectedRoute><WritingRoom /></ProtectedRoute>} />
        <Route path="/speaking" element={<ProtectedRoute><SpeakingRoom /></ProtectedRoute>} />
        <Route path="/statistic" element={<ProtectedRoute><Statistic /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
