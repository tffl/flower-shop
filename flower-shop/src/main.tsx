// import { StrictMode } from 'react'
// import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import { PageMain } from './pages/pageMain';
// import { test } from "./app/utilities";

// test();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<PageMain />);
