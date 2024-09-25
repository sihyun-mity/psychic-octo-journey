import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="psychic-octo-journey/*">
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
