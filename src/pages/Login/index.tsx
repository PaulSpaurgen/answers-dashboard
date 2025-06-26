import { useState } from 'react'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { assets } from '@/utills/assets'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
      navigate('/')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black-500 border border-black-200 rounded-lg p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white-100 mb-6 text-center">Log in</h1>
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleEmailLogin} className="space-y-6">
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            icon={<img src={assets.profile} alt="email" className="w-[14px] h-[14px]" />}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            icon={<img src={ assets.time} alt="password" className="w-[14px] h-[14px]" />}
          />
          <Button variant="primary" size="large" onClick={() => {}} className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-black-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black-500 text-gray-400">or</span>
          </div>
        </div>
        <Button variant="secondary" size="large" onClick={handleGoogleLogin} className="w-full" disabled={isLoading}>
          Continue with Google
        </Button>
      </div>
    </div>
  )
} 