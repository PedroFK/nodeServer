import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #clients = new Map()

    list(search) {
        return Array.from(this.#clients.entries()).map((clientArray) => {
            const id = clientArray[0]
            const data = clientArray[1]
            
            return {
                id: id,
                ...data,
            }
        })
        .filter(client => {
            if (search) {
                return client.name.includes(search)
            }

            return true
        })
    }

    create(clients) {
        const clientId = randomUUID()

        this.#clients.set(clientId, clients)
    }

    update(id, clients) {
        this.#clients.set(id, clients)
    }

    delete(id) {
        this.#clients.delete(id)
    }
}