import 'dotenv/config'
import express from 'express'
import { apiRouter } from './routes/api.routes'
import { errorMiddleware } from './middlewares/errorMiddleware'
import { authRouter } from './routes/auth.routes'

const app = express()

app.use(express.json())
app.use('/auth', authRouter)
app.use('/api', apiRouter)
app.use(errorMiddleware)

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

// mudar o objeto de filmes pra ter um array de ratings/aviações de objetos, onde o objeto vai ter a estrela e o comentário de um usuário
// e cada estrela adicionada no array, vou recalcular a média de estrelas e sempre retornar essa média