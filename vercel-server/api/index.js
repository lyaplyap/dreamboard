const express = require('express');
const cors = require('cors');

const { gifts } = require('./gifts');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_, response) => response.send('Dreamboard (Wishly) API on Vercel'));

app.get('/api/v1/gifts', (_, response) => {
    const data = gifts.getAll();
    
    response.json(data);
});

app.get('/api/v1/gifts/:id', (request, response) => {
    const { id } = request.params;
    const data = gifts.getById(id);

    if (!data) {
        response.status(404).json({ code: 'NOT_FOUND' });

        return;
    }
    
    response.json(data);
});

app.post('/api/v1/gifts', (request, response) => {
    const { title, description, price, photo } = request.body;

    if (!title || !description || !price || !photo) {
        response.status(422).json({ code: 'INCOMPLETE_REQUEST' });

        return;
    }
  
    const data = gifts.create({ title, description, price, photo });

    response.status(201).json(data);
});

app.put('/api/v1/gifts/:id', (request, response) => {
    const { id } = request.params;
    const newGift = request.body;

    if (!newGift) {
        response.status(422).json({ code: 'INCOMPLETE_REQUEST' });

        return;
    }

    const updatedGift = gifts.updateById(id, newGift);

    if (!updatedGift) {
        response.status(404).json({ code: 'NOT_FOUND' });

        return;
    }

    response.json(updatedGift);
});

app.delete('/api/v1/gifts/:id', (request, response) => {
    const { id } = request.params;

    const deletedGift = gifts.deleteById(id);

    if (!deletedGift) {
        response.status(404).json({ code: 'NOT_FOUND' });

        return;
    }

    response.json(deletedGift);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
