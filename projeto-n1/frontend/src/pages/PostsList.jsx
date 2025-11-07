import React, { useEffect, useState } from 'react'
import api from '../services/api'
import PostCard from '../components/PostCard'
import Pagination from '../components/Pagination'

export default function PostsList() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchPosts = async (p = 1) => {
    setLoading(true)
    try {
      const res = await api.get('/posts', { params: { page: p, limit: 6 } })
      setPosts(res.data.posts)
      setPage(res.data.page)
      setPages(res.data.pages)
    } catch (err) {
      console.error(err)
      alert('Erro ao buscar posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPosts(page) }, [page])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-amber-200 mb-6 text-center">Últimos Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? <p>Carregando...</p> : posts.map(p => <PostCard key={p._id} post={p} />)}
      </div>
      <Pagination page={page} pages={pages} onChange={setPage} />
    </div>
  )
}
