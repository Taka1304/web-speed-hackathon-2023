import './polyfill/install';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/application/App';
import { injectGlobalStyle } from './global.styles';

injectGlobalStyle();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
