import express from 'express'
import cors from 'cors'
import { makeRoutes } from './routes'
import { errorHandler } from './middleware/error.handler'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Fake database
const database = new Map<string, string>()

makeRoutes(app, database)

// Example health check route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' })
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
