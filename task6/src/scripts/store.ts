import { createGift, getAllGifts } from './api';
import { Gift } from './types';

class Store {
    store: Gift[] = [];

    async init() {
        const gifts = await getAllGifts();

        this.store = gifts;
    }

    getAll() {
        return this.store;
    }

    getById(id: string) {
        return this.store.find((item) => item.id === id);
    }

    async create(item: Partial<Gift>) {
        const createdItem = await createGift(item);

        this.store.push(createdItem);
    }

    updateById(id: string, newItem: Partial<Gift>) {
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
