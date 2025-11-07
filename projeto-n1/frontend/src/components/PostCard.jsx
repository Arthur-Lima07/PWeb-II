import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PostCard({ post }) {
  const navigate = useNavigate()
  return (
    <div className="bg-[#8B4513] p-5 rounded-lg shadow-md hover:shadow-lg transition duration-200">
      <h3 className="font-bold text-xl text-amber-300">{post.title}</h3>
      <p className="text-sm text-amber-200 mt-3">
        {post.text.length > 180 ? post.text.slice(0, 180) + '...' : post.text}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-amber-100">{post.user?.username || 'Anônimo'}</span>
        <button
          onClick={() => navigate(`/posts/${post._id}`)}
          className="text-sm text-amber-300 hover:text-amber-100"
        >
          Ver
        </button>
      </div>
    </div>
  )
}
