import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'
import CommentForm from '../components/CommentForm'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  const fetchPost = async () => {
    try {
      const res = await api.get(`/posts/${id}`)
      setPost(res.data)
    } catch (err) {
      console.error(err)
      alert('Erro ao buscar post')
    }
  }

  const fetchComments = async () => {
    try {
      const res = await api.get(`/comments/${id}`)
      setComments(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => { fetchPost(); fetchComments() }, [id])

  return (
    <div className="p-6">
      {!post ? (
        <p>Carregando...</p>
      ) : (
        <div className="bg-[#8B4513] p-6 rounded shadow text-amber-200">
          <h1 className="text-3xl font-bold text-amber-100">{post.title}</h1>
          <p className="text-sm text-amber-300 mb-4">
            {post.user?.username || 'Anônimo'} — {new Date(post.createdAt).toLocaleString()}
          </p>
          <p className="whitespace-pre-wrap">{post.text}</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-amber-100">Comentários</h3>
        <CommentForm postId={id} onCreated={fetchComments} />
        <div className="mt-4 space-y-3">
          {comments.map(c => (
            <div key={c._id} className="bg-[#8B4513] p-3 rounded shadow-sm text-amber-200">
              <div className="text-sm text-amber-300">
                {c.user?.username || 'Anônimo'} — {new Date(c.createdAt).toLocaleString()}
              </div>
              <p className="mt-1">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
