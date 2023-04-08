import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Quiz from './pages/Quiz';
import QuizRoute from './components/QuizRoute';
import Navbar from './components/Navbar';
import store from './store';

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#E5E5E5' }}>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route index element={<Quiz />} path='/' />
          <Route path='/*' element={<QuizRoute />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
