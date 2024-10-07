import {fastify} from 'fastify'
import {DatabaseMemory} from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.get('/clients', (request, reply) => {
    const clients = database.list()
    
    return clients
})

server.post('/clients', (request, reply) => {
    const { name, cpf } = request.body

    database.create({
        name,
        cpf,
    })

    return reply.status(201).send()
})

server.put('/clients/:id', (request, reply) => {
    const clientId = request.params.id

    const { name, cpf } = request.body

    const client = database.update(clientId, {
        name, cpf
    })

    return reply.status(204).send()
})

server.delete('/clients/:id', (request, reply) => {
    const clientId = request.params.id
    
    database.delete(clientId)
    
    return reply.status(204).send
})

server.listen({
    port: 3200,
})