import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import AuthProvider from './utils/AuthContext';

import MainPage from './pages/MainPage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/ToDoAPI">
    <AuthProvider>
      <StrictMode>
        <MainPage />
      </StrictMode>
    </AuthProvider>
  </BrowserRouter>
);
