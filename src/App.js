// import logo from './logo.svg';
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
    <>
      <Navbar />

      <Router>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/todoapp" element={<Todoapp></Todoapp>} />
          <Route path="/expensetracker" element={<Expensetracker></Expensetracker>} />
          <Route path="/moviesite" element={<MovieSite></MovieSite>} />
          <Route path="/store" element={<Store></Store>} />
        </Routes>

      </Router>
      <Footer />
    </>
  );
}

export default App;
