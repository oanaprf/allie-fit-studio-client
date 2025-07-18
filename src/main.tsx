import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './App.tsx';
import theme from './config/theme.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: theme,
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
