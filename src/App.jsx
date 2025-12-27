import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  )
}
