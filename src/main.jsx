import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/themeContext'
import { AuthContextProvider } from './context/authContext.jsx'
import { NotifContextProvider } from './context/notifContext.jsx'
import { DarkModeContextProvider } from './context/darkmodeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeContextProvider>
      <NotifContextProvider>
        <AuthContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </AuthContextProvider>
      </NotifContextProvider>
    </DarkModeContextProvider>
  </StrictMode>,
)
