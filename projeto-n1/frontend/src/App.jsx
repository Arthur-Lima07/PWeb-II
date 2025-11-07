import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostsList from './pages/PostsList'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Login from './pages/Login'


export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
        </div>
    )
}