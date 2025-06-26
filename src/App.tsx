import { Provider } from 'react-redux'
import { store } from '@/store'
import Nav from './components/Nav'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login from '@/pages/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { setUser, setLoading } from '@/store/slices/authSlice'
import type { RootState } from '@/store'

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

function AppContent() {
  const { user, isLoading } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      dispatch(setUser(u ? {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName
      } : null))
    })
    return () => unsub()
  }, [dispatch])

  if (isLoading) {
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

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}
