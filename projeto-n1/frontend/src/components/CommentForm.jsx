import React, { useState } from 'react'
import api from '../services/api'

export default function CommentForm({ postId, onCreated }) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setLoading(true)
    try {
      const userId = localStorage.getItem('userId') || null
      await api.post('/comments', { text, postId, userId })
      setText('')
      if (onCreated) onCreated()
    } catch (err) {
      console.error(err)
      alert('Erro ao criar comentário')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="w-full p-3 border-2 border-amber-400 bg-[#8B4513] text-amber-100 rounded placeholder-amber-300 focus:outline-none focus:border-amber-200"
        rows={3}
        placeholder="Escreva um comentário..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="mt-2 text-right">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-amber-500 text-[#8B4513] rounded hover:bg-amber-400 transition"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
