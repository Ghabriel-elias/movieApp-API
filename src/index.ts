import express from 'express'
import { api } from './routes/api.routes'

const app = express()

app.use(express.json())
app.use('/api', api)

const PORT = process.env.PORT || 3031

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`)
})

// Modulo para criar/editar/deletar filmes e séries

// Modulo para favoritar/desfavoritar/buscar os favoritos

// Modulo para autenticação com jwt

// Modulo para buscar/exibir filmes

// Usuário admin pode criar/editar/deletar filmes da api

// Usuário convidado por buscar/ver detalhes do filme

// Usuário logado pode avaliar com estrela e comentário e favoritar o filmes