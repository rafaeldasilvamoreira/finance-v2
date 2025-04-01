import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { Routes } from './routes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <Routes />
      
  </StrictMode>,
)
