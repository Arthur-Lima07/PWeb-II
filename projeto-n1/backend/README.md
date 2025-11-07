Como usar

1. Copie `.env.example` para `.env` e ajuste `MONGO_URI` e `JWT_SECRET`.
2. Instale dependências: `npm install`.
3. Rodar em desenvolvimento: `npm run dev` (nodemon).
4. Endpoints básicos:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/posts
- GET /api/posts/:id
- POST /api/posts
- GET /api/comments/:postId
- POST /api/comments


Observação: autenticação é simples (token JWT) e a proteção de rotas não foi implementada.