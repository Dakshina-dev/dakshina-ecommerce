import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Context from './Context'

createRoot(document.getElementById('root')).render(

  <Context>
    <StrictMode>
    <App />
  </StrictMode>
  </Context>

)
