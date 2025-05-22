import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap para diseño responsivo y componentes predefinidos
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap (incluye Popper.js) para funcionalidades interactivas como menús colapsables y modales
import 'bootstrap-icons/font/bootstrap-icons.css'; // En main.tsx

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
