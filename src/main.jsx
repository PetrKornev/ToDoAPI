import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import MainPage from './pages/MainPage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/ToDoAPI">
    <StrictMode>
      <MainPage />
    </StrictMode>
  </BrowserRouter>
);
