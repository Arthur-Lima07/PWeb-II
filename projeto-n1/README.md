# Árborea — Projeto Web II

Um projeto full stack desenvolvido com **React**, **Node.js**, **Express** e **MongoDB**, simulando uma rede social simples com autenticação de usuários e sistema de posts e comentários — tudo com um design temático em **verde-musgo, marrom e âmbar** 🍂

---

## 🧭 Sumário

- [🎯 Objetivo](#-objetivo)
- [⚙️ Tecnologias](#️-tecnologias)
- [🧩 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [🧠 Funcionalidades Principais](#-funcionalidades-principais)
- [🎨 Design do Sistema](#-design-do-sistema)
- [🔐 Autenticação](#-autenticação)

---

## 🎯 Objetivo

Este projeto foi desenvolvido como parte da disciplina **Projeto Web II**, com o objetivo de criar uma aplicação web moderna e funcional, utilizando o **ecossistema MERN (MongoDB, Express, React, Node.js)**.

O sistema permite que usuários criem contas, publiquem posts, visualizem publicações de outros usuários e comentem, simulando o funcionamento básico de uma rede social.

---

## ⚙️ Tecnologias

**Frontend**
- ⚛️ React 
- 💨 TailwindCSS (com @tailwindcss/forms)
- 🔗 React Router DOM
- 🧰 Axios (requisições HTTP)
- 🎨 Tema customizado: Verde-musgo (#556B2F), Marrom (#8B4513), Âmbar (#FBBF24)

**Backend**
- 🟢 Node.js + Express
- 🔒 JWT (autenticação segura)
- 🗄️ MongoDB + Mongoose
- 🔁 CORS configurado para o frontend em http://localhost:3001

---

## 🧩 Estrutura do Projeto

projeto-n1/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── controllers/
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── services/
    │   ├── App.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js


## 🚀 Como Executar

<<<<<<< HEAD
cd backend
npm install
npm run dev
=======
1. Clonar o repositório
   
2. Instalar dependências

    Backend:

     cd backend
     npm install
>>>>>>> 27f1298b8b165ea79f905b6b67855603555df1c3


    Frontend:

     cd frontend
     npm install

3. Configurar variáveis de ambiente

Crie um arquivo .env com o seguinte conteúdo dentro de /backend

PORT=3000
MONGO_URI=mongodb://localhost:27017/twitter-n1
JWT_SECRET=sua_chave_secreta_aqui

4. Executar os servidores

    Backend:
      cd backend
      npm start


<<<<<<< HEAD
Acesse http://localhost:3001
=======
    Frontend:
      cd ../frontend
      npm run dev

    Acesse no navegador:
    👉 http://localhost:3001

## 🧠 Funcionalidades Principais

✅ Cadastro e login de usuários
✅ Criação, listagem e exclusão de posts
✅ Sistema de comentários
✅ Paginação de posts
✅ Logout e autenticação JWT
✅ Interface responsiva e moderna com TailwindCSS
✅ Tema verde-musgo + marrom + âmbar 🌿


## 🎨 Design do Sistema

Navbar marrom (#8B4513) com botões âmbar

Fundo da aplicação verde-musgo (#556B2F)

Cards de posts e formulários com fundo marrom e texto âmbar

Botões com transições suaves e tons âmbar de destaque

Layout responsivo (mobile-first)


## 🔐 Autenticação

O sistema usa JWT (JSON Web Token) para autenticar usuários.

Após o login, o token é salvo no localStorage

As rotas protegidas no backend exigem o token no header Authorization

O logout limpa o token e redireciona o usuário para a tela inicial
>>>>>>> 27f1298b8b165ea79f905b6b67855603555df1c3


## Observações
- Sistema de autenticação é intencionalmente simples para atender as diretrizes N1 (registro e token).
