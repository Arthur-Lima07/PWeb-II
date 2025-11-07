import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !text.trim()) return alert('Título e texto são obrigatórios')
    setLoading(true)
    try {
      const userId = localStorage.getItem('userId') || null
      const res = await api.post('/posts', { title, text, userId })
      navigate(`/posts/${res.data._id}`)
    } catch (err) {
      console.error(err)
      alert('Erro ao criar post')
    } finally { setLoading(false) }
  }

  return (
    <div className="max-w-2xl mx-auto bg-[#8B4513] p-6 rounded shadow text-amber-200">
      <h2 className="text-2xl font-semibold mb-4 text-amber-100">Criar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título"
          className="w-full p-2 border-2 border-amber-400 bg-transparent text-amber-100 placeholder-amber-300 rounded mb-3"
        />
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={6}
          placeholder="Escreva seu post..."
          className="w-full p-2 border-2 border-amber-400 bg-transparent text-amber-100 placeholder-amber-300 rounded mb-3"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-amber-500 text-[#8B4513] rounded hover:bg-amber-400 transition"
        >
          Publicar
        </button>
      </form>
    </div>
  )
}
