import './App.css';
import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import FrontPage from './pages/FrontPage/FrontPage';
import ProductsPage from './pages/ProductPage/ProductPage';
import StickersPage from './pages/StickersPage/StickersPage';
import NoPage from './pages/NoPage/NoPage';
import CartPage from './pages/CartPage/CartPage';


interface AppOverallState {
  showButton: boolean,
}

const initState: AppOverallState = {
  showButton: false,
}

const App: FC = () => {
  const [appState, setAppState] = useState(initState);

  // Scroll To Top Button Section
  useEffect(() => {
    const scrollButtonVisible = () => {
      window.scrollY > 500 ? setAppState({ ...appState, showButton: true}) : setAppState({ ...appState, showButton: false});
    };

    window.addEventListener('scroll', scrollButtonVisible);

    return () => {
      window.removeEventListener('scroll', scrollButtonVisible);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  // Render Section
  return <>
  <div className="App">
    <BrowserRouter>
      <NavBar />
      {appState.showButton && (
        <div className='scrollTopDiv'>
          <button className='scrollTopButton' onClick={scrollToTop}>⬆</button>
        </div>
      )}
      
      <Routes>
        <Route path='/' element={<FrontPage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/items/:id' element={<ProductsPage />}/>
        <Route path='/:id' element={<StickersPage />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  </>
}

export default App;
