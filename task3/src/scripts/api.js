const API_URL = 'http://localhost:3000/api/v1';

export const getAllGifts = async () => {
    const response = await fetch(`${API_URL}/gifts`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const getGiftById = async (id) => {
    const response = await fetch(`${API_URL}/gifts/${id}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const createGift = async (gift) => {
    const response = await fetch(`${API_URL}/gifts`, {
        method: 'POST',
        body: JSON.stringify(gift),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const updateGiftById = async (id, gift) => {
    const response = await fetch(`${API_URL}/gifts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(gift),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const deleteGiftById = async (id) => {
    const response = await fetch(`${API_URL}/gifts/${id}`, { method: 'DELETE' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};
