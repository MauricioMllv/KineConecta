import axios from 'axios'

export const getImagesFRequest = async () =>
    await axios.get('http://localhost:4000/imagesf');

export const createImagesFRequest = async (images) => {
    const form = new FormData();
    for  (let key in images) {
        form.append(key, images[key]);
    }
    return await axios.post('http://localhost:4000/imagesf', form, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}
    
export const deleteImagesFRequest = async (id) =>
    await axios.delete(`http://localhost:4000/imagesf/${id}`);

export const getImageFRequest = async (id) =>
    await axios.get(`http://localhost:4000/imagesf/${id}`);

export const updateImagesFRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/imagesf/${id}`, newFields);
