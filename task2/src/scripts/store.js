import { GIFTS } from './constants';

class Store {
    store = GIFTS;

    getAll() {
        return this.store;
    }

    getById(id) {
        return this.store.find((item) => item.id === id);
    }

    create(item) {
        this.store.push({
            id: `title-${Date.now()}`,
            ...item
        });
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
