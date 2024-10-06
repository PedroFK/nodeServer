import {fastify} from 'fastify'
import {DatabaseMemory} from './database-memory.js'

const server = fastify()

server.get('/clients', () => {
    
})

server.post('/clients', () => {
    
})

server.put('/clients/:id', () => {
    
})

server.delete('/clients/:id', () => {
    
})

server.listen({
    port: 3333,
})