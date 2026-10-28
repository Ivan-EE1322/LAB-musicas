import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Props from './Props'
import Tarea from './Tarea'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Props nombre="Raul" edad={30} 
      children={<Tarea />} 
    />
  </StrictMode>,
)
