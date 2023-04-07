import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Quiz from './pages/Quiz';
import QuizRoute from './components/QuizRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#E5E5E5' }}>
      <Navbar />
      <Routes>
        <Route index element={<Quiz />} path='/' />
        <Route path='/*' element={<QuizRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
