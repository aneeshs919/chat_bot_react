import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import App from './App.tsx'
import './index.css'
import VirtualAssistants from '@src/virtualAssistants'

const rootElement = document.getElementById('root') as Element | any

const routing = (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<VirtualAssistants />} />
        <Route
          path='/virtual_assistant/:type'
          element={<VirtualAssistants />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
)

ReactDOM.createRoot(rootElement).render(routing)
