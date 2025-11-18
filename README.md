
PASTA ESTRUTURA 
/backend
  ├── src
  │   ├── controllers
  │   ├── middlewares
  │   ├── routes
  │   ├── services
  │   ├── types
  │   └── utils
  ├── .env
  ├── package.json
  └── tsconfig.json

/frontend
  ├── app
  │   ├── cadastro
  │   ├── login
  │   ├── profile
  │   ├── globals.css
  │   ├── layout.tsx
  │   └── page.tsx
  ├── components
  ├── contexts
  ├── hooks
  ├── utils
  ├── public
  ├── package.json
  └── next.config.ts

  
///////////////


🚀 Backend (Node.js / Express / TypeScript)
🔧 Funcionalidades

Cadastro de usuário

Login com verificação de senha

Geração de token JWT

Middleware de autenticação

Padrão Controller → Service → Repository

//////////////////////////

 Como rodar ?
 
cd backend
npm install
npm run dev


Crie o arquivo .env:

JWT_SECRET= ASDJAOODJASD
PORT=3001

//////////////////////////////////////////////

💻 Frontend (Next.js 14 / React / TypeScript)
🔧 Funcionalidades

Contexto global de autenticação (AuthContext)

Login persistente via localStorage

Rotas protegidas (useProtectedRoute)

Layouts independentes

Telas do projeto

/login

/cadastro

/profile (protegida)

Hooks customizados

Requisições via Axios (apiAuth.ts)

 Como rodar ?
 
cd frontend
npm install
npm run dev


Crie next-env.d.ts ou arquivo .env.local:

NEXT_PUBLIC_API_URL=http://localhost:3001

Fluxo de Autenticação

Usuário faz login → envia email/senha

Backend valida e retorna token JWT

Front salva token no localStorage

AuthContext atualiza o estado do usuário

useProtectedRoute bloqueia páginas protegidas

Logout remove o token e limpa o contexto

 
                                  Tecnologias Utilizadas
                                   Backend e Frontend

Node.js

Express

TypeScript

JWT (jsonwebtoken)

Bcrypt

Dotenv

Next.js 14 

React

TypeScript

TailwindCSS

Axios

Context API
