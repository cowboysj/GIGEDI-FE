// index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Header from './components/Header.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    // </React.StrictMode>
  );