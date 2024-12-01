const fs = require('fs');
const path = require('path');

const initialData = require('./data.json');

const PATH = path.join(__dirname, 'data.json');

class Gifts {
    _data = initialData;

    _overwrite() {
        fs.writeFileSync(PATH, JSON.stringify(this._data, null, 4));
    }

    getAll() {
        return this._data;
    }

    getById(id) {
        return this._data.find((item) => item.id === id);
    }

    create(item) {
        const newItem = {
            id: `gift-${Date.now()}`,
            ...item
        };
        
        this._data.push(newItem);
        this._overwrite();

        return newItem;
    }

    updateById(id, newItem) {
        const index = this._data.findIndex((item) => item.id === id);

        if (index === -1) {
            return;
        }

        const updatedItem = {
            ...this._data[index],
            ...newItem
        };

        this._data[index] = updatedItem;
        this._overwrite();

        return updatedItem;
    }

    deleteById(id) {
        const deletedItem = this._data.find((item) => item.id === id);

        if (!deletedItem) {
            return;
        }
        
        this._data = this._data.filter((item) => item.id !== id);
        this._overwrite();

        return deletedItem;
    }
}

module.exports = {
    gifts: new Gifts()
};
