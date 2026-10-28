import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EstimatePage } from './EstimatePage';
import '../styles/global.css';
import '../styles/estimate.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EstimatePage />
  </StrictMode>,
);
