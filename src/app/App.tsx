import React from 'react';

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import { Footer } from './components/shared/Footer/Footer';
import { Menu } from 'app/components/shared/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
