import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Expensetracker from './pages/ExpenseTracker';
import Home from './pages/Home';
import MovieSite from './pages/MovieSite';
import Store from './pages/Store';
import Todoapp from './pages/Todoapp';
import './css/Navbar.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoapp" element={<Todoapp />} />
        <Route path="/expensetracker" element={<Expensetracker />} />
        <Route path="/moviesite" element={<MovieSite />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
