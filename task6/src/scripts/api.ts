import { Gift } from './types';

const API_URL = 'https://dreamboard-ruddy.vercel.app/api/v1';

export const getAllGifts = async () => {
    const response = await fetch(`${API_URL}/gifts`);
    const data: Gift[] = await response.json();

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return data;
};

export const getGiftById = async (id: string) => {
    const response = await fetch(`${API_URL}/gifts/${id}`);
    const data: Gift = await response.json();

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return data;
};

export const createGift = async (gift: Partial<Gift>) => {
    const response = await fetch(`${API_URL}/gifts`, {
        method: 'POST',
        body: JSON.stringify(gift),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data: Gift = await response.json();

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return data;
};

export const updateGiftById = async (id: string, gift: Partial<Gift>) => {
    const response = await fetch(`${API_URL}/gifts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(gift),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data: Gift = await response.json();

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return data;
};

export const deleteGiftById = async (id: string) => {
    const response = await fetch(`${API_URL}/gifts/${id}`, { method: 'DELETE' });
    const data: Gift = await response.json();

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return data;
};
