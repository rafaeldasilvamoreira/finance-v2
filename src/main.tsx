import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LayoutPage } from './pages/layoutPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/errorPage'
import { HomePage } from './pages/homePage'
import './styles/globals.css'
import { Profile } from './pages/profilePage'
import { CountPage } from './pages/countPage'
import { CardPage } from './pages/cardPage'
import { LoginPage } from './auth/loginPage'
import { RegisterPage } from './auth/registerPage'
import { LayoutAuth } from './auth/layoutAuth'


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path='/homePage' element={<HomePage />} />
          <Route path='/profilePage' element={<Profile />} />
          <Route path='/countPage' element={< CountPage />} />
          <Route path='/cardPage' element={< CardPage />} />
        </Route>

        <Route path='/auth' element={<LayoutAuth />}>
          <Route path='/auth/loginPage' element={<LoginPage />} />
          <Route path='/auth/registerPage' element={<RegisterPage />} />
        </Route>


        <Route path="/*" element={<ErrorPage />}> </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
