import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #clients = new Map()

    list() {
        return this.#clients.values()
    }

    create(clients) {
        const clientId = randomUUID()

        this.#clients.set(clientId, clients)
    }

    update(id, clients) {
        this.#clients.set(id, clients)
    }

    delete(id, clients) {
        this.#clients.delete(id)
    }
}