import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/settings.js';
import App from './app.js';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalize>
    <SettingsProvider>
    <App />
    </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);