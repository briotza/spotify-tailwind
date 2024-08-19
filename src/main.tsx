import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WebRoutes from "./routes/WebRoutes.tsx";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebRoutes />
  </StrictMode>,
)
