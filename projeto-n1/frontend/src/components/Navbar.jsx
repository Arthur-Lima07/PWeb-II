import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const username = localStorage.getItem('username')

  const handleLogout = () => {
    localStorage.clear()
    alert("Você saiu da conta.")
    navigate('/')
  }

  return (
    <nav className="bg-[#8B4513] shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-300 hover:text-amber-100">
          Árborea
        </Link>
        <div className="space-x-3">
          {username ? (
            <>
              <span className="text-amber-200">Saudações, {username}</span>
              <Link
                to="/create"
                className="px-3 py-2 bg-amber-500 text-[#8B4513] rounded hover:bg-amber-400"
              >
                Novo Post
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-amber-700 text-white rounded hover:bg-amber-600"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-2 bg-amber-600 text-white rounded hover:bg-amber-500"
              >
                Entrar
              </Link>
              <Link
                to="/signup"
                className="px-3 py-2 bg-amber-500 text-[#8B4513] rounded hover:bg-amber-400"
              >
                Criar conta
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
