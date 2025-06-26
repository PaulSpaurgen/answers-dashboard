import Nav from './components/Nav'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Login from '@/pages/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/config'

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-black-800 p-0 flex w-full">
      <Nav />
      <div className="w-full h-full">
        <Home />
      </div>
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  if (loading) {
    return <div className="min-h-screen bg-black-800 flex items-center justify-center text-white">Loading...</div>
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={ user ? <Navigate to="/" replace /> : <Login /> } />
        <Route path="/" element={ user ? <DashboardLayout /> : <Navigate to="/login" replace /> } />
      </Routes>
    </Router>
  )
}
