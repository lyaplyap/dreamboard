import { createGift, getAllGifts } from './api';

class Store {
    store = [];

    async init() {
        const gifts = await getAllGifts();

        this.store = gifts;
    }

    getAll() {
        return this.store;
    }

    getById(id) {
        return this.store.find((item) => item.id === id);
    }

    async create(item) {
        const createdItem = await createGift(item);

        this.store.push(createdItem);
    }

    updateById(id, newItem) {
        const index = this.store.findIndex((item) => item.id === id);

        if (index !== -1) {
            this.store[index] = {
                ...this.store[index],
                ...newItem
            };
        }
    }
}

export const store = new Store();
