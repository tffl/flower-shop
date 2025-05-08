import { StrictMode } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/styles.css';
import { PageMain } from './pages/pageMain';
import { PageNotFound } from './pages/pageNotFound';
import { PageLogin } from './pages/pageLogin';
import { PageAuth } from './pages/pageAuth';
import { PageAbout } from './pages/pageAbout';
import { PageCatalog } from './pages/pageCatalog';
// import { test } from "./app/utilities";

// test();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<PageLogin />} />
        <Route path='/auth' element={<PageAuth />} />
        <Route path='/about' element={<PageAbout />} />
        <Route path='/catalog' element={<PageCatalog />} />
        <Route path='/' element={<PageMain />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
