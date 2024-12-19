import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import './App.css'
import Topbar from './components/dashboard/TopBar'
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" />
          <Route path="/chat" />
        </Routes>
      </Router>
    </>
  )
}

export default App
