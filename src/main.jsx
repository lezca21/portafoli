import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* "never": las animaciones de entrada siempre se reproducen. Las
          animaciones más intensas (paralaje, scroll) igual respetan la
          preferencia de "reducir movimiento" donde la comprobamos a mano. */}
      <MotionConfig reducedMotion="never">
        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
);
