import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', { username, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userId', res.data.user.id)
      localStorage.setItem('username', res.data.user.username)
      alert(`Bem-vindo, ${res.data.user.username}!`)
      navigate('/')
    } catch (err) {
      alert('Erro ao fazer login')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-[#8B4513] p-6 rounded shadow text-amber-200 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-amber-100">Entrar</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Usuário"
          className="w-full p-2 border-2 border-amber-400 bg-transparent text-amber-100 placeholder-amber-300 rounded mb-3"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
          className="w-full p-2 border-2 border-amber-400 bg-transparent text-amber-100 placeholder-amber-300 rounded mb-3"
        />
        <button
          type="submit"
          className="w-full py-2 bg-amber-500 text-[#8B4513] rounded hover:bg-amber-400 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
