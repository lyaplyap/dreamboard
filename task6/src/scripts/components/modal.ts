import { getCancelTemplate } from '../icons';
import { store } from '../store';
import { Gift, GiftTemplate } from '../types';

import { renderNewGiftCard } from './gift-cards';

const submitForm: EventListener = async (event) => {
    event.preventDefault();

    const titleInput = document.getElementById('gift-form__title');
    const descriptionInput = document.getElementById('gift-form__description');
    const priceInput = document.getElementById('gift-form__price');
    const photoInput = document.getElementById('gift-form__photo');

    if (!titleInput || !descriptionInput || !priceInput || !photoInput) {
        throw new Error('Elements was not found');
    }

    const { value: title } = titleInput as HTMLInputElement;
    const { value: description } = descriptionInput as HTMLInputElement;
    const { value: price } = priceInput as HTMLInputElement;
    const { files } = photoInput as HTMLInputElement;

    if (!files) {
        throw new Error('Photo was not found');
    }

    const file = files[0];

    if (!title || !description || !price || !file) {
        throw new Error('Data is incomplete');
    }

    const data: GiftTemplate = {
        title,
        description,
        price: `$${price}`,
        photo: URL.createObjectURL(file)
    };

    await store.create(data);
    renderNewGiftCard(data);

    closeModal();
};

const resetForm = () => {
    const titleInput = document.getElementById('gift-form__title') as HTMLInputElement | null;
    const descriptionInput = document.getElementById('gift-form__description') as HTMLInputElement | null;
    const priceInput = document.getElementById('gift-form__price') as HTMLInputElement | null;
    const photoInput = document.getElementById('gift-form__photo') as HTMLInputElement | null;

    if (!titleInput || !descriptionInput || !priceInput || !photoInput) {
        throw new Error('Elements was not found');
    }

    titleInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';
    photoInput.value = '';
};

const hidePreview = () => {
    const preview = document.getElementById('gift-form__preview');

    if (!preview) {
        return;
    }

    preview.style.display = 'none';
    preview.removeAttribute('src');
};

export const openModal = () => {
    const modal = document.getElementById('modal');

    if (!modal) {
        throw new Error('Modal was not found');
    }

    modal.style.display = 'flex';
};

export const closeModal = () => {
    const modal = document.getElementById('modal');

    if (!modal) {
        throw new Error('Modal was not found');
    }

    modal.style.display = 'none';

    resetForm();
    hidePreview();
};

export const renderModal = () => {
    const modal = document.getElementById('modal');

    if (!modal) {
        throw new Error('#footer not found');
    }

    const component = document.createElement('div');
    
    component.className = 'modal__content';
    component.innerHTML = `
        <header class="modal__header">
            <h1 class="modal__title">Gift</h1>
            <button
                id="modal__action-close"
                class="button button--size_l button--color_sulu button--view_clear"
                aria-label="Close"
            >
                ${getCancelTemplate('l')}
            </button>
        </header>
        <main class="modal__main">
            <form id="gift-form">
                <label class="gift-form__field">
                    Title
                    <input type="text" id="gift-form__title" />
                </label>
                <label class="gift-form__field">
                    Description
                    <input type="text" id="gift-form__description" />
                </label>
                <label class="gift-form__field">
                    Price
                    <input type="number" id="gift-form__price" />
                </label>
                <label class="gift-form__field">
                    Photo
                    <input type="file" id="gift-form__photo" accept="image/*" />
                </label>
                <img id="gift-form__preview" src="" alt="Image Preview" style="display:none;">
            </form>
        </main>
        <footer class="modal__footer">
            <button type="submit" form="gift-form" class="button button--size_l button--color_sulu button--view_default">
                Save
            </button>
        </footer>
    `;

    // Submit handler
    const form = component.querySelector('#gift-form');

    if (form) {
        form.addEventListener('submit', submitForm);
    }

    // Close modal handler
    const closeButton = component.querySelector('#modal__action-close');

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Attachment handler
    const photoInput = component.querySelector('#gift-form__photo') as HTMLInputElement;
    const photoPreview = component.querySelector('#gift-form__preview') as HTMLInputElement;

    if (photoInput && photoPreview) {
        photoInput.addEventListener('change', () => {
            if (!photoInput || !photoInput.files) {
                throw new Error('Photo was not found');
            }

            const file = photoInput.files[0];
            
            if (file) {
                photoPreview.src = URL.createObjectURL(file);
                photoPreview.style.display = 'block';
            }
        });
    }

    modal.appendChild(component);
};