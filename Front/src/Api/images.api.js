import axios from 'axios'

export const getImagesRequest = async () =>
    await axios.get('http://localhost:4000/images');

export const createImagesRequest = async (images) => {
    const form = new FormData();
    for  (let key in images) {
        form.append(key, images[key]);
    }
    return await axios.post('http://localhost:4000/images', form, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}
    
export const deleteImagesRequest = async (id) =>
    await axios.delete(`http://localhost:4000/images/${id}`);

export const getImageRequest = async (id) =>
    await axios.get(`http://localhost:4000/images/${id}`);

export const updateImagesRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/images/${id}`, newFields);
