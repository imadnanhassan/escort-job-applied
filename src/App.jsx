import React from 'react';
import Home from './Pages/Home/Home';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='min-h[calc(100vh-250px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;