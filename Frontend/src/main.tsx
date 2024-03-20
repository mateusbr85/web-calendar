import React from 'react'
import ReactDOM from 'react-dom/client';
import { CustomProvider } from 'rsuite';
import App from './App.tsx'
import './index.css'
import pt_BR from 'rsuite/locales/pt_BR';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomProvider locale={pt_BR}>
      <App />
    </CustomProvider>
  </React.StrictMode>,
)
