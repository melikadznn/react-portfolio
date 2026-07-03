// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProjectDetails from './ProjectDetails.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* صفحه اصلی پورتفولیو */}
        <Route path="/" element={<App />} />
        {/* صفحه داینامیک پروژه‌ها */}
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)