import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HeroUIProvider} from "@heroui/react";
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HeroUIProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </HeroUIProvider>
  </BrowserRouter>,
)
