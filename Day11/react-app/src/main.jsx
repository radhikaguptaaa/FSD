import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Marks from "./marks.jsx"
import displayMarks from './displayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <displayMarks />
    
  </StrictMode>,
);
