import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-black-800 p-0 flex w-full">
      <Nav />
      <div className="w-full h-full">
        <Home />
      </div>
    </div>
  )
}

export default App
