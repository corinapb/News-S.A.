import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import App from './App.tsx';

ReactDOM
      .createRoot(document.getElementById('root') as HTMLElement)
      .render(
            <BrowserRouter>
                  <DataProvider>
                        <App />
                  </DataProvider>
            </BrowserRouter>,
      );
