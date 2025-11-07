import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) return alert('Preencha os campos');
        try {
            const res = await api.post('/auth/register', { username, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user.id);
            alert('Conta criada com sucesso');
            navigate('/');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || 'Erro no cadastro');
        }
    }


    return (
        <div className="max-w-md mx-auto bg-[#8B4513] p-6 rounded shadow text-amber-200 mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-amber-100">Criar conta</h2>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nome de usuário" className="w-full p-2 border-2 border-amber-400 bg-transparent text-amber-100 placeholder-amber-300 rounded mb-3" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" className="w-full p-2 border-2 border-amber-400 bg-transparent text-amber-100 placeholder-amber-300 rounded mb-3" />
                <div className="text-right">
                    <button type="submit" className="w-full py-2 bg-amber-500 text-[#8B4513] rounded hover:bg-amber-400 transition">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}