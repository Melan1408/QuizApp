import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Quiz from './pages/Quiz';

const linksArray = ['Menu1', 'Menu2', 'Menu3', 'Menu4'];

function App() {
  return (
    <div className='App'>
      <Navbar links={ linksArray }/>
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
