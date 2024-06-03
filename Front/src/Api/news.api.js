import axios from 'axios'

export const getNewsRequest = async () =>
    await axios.get('http://localhost:4000/news');

export const createNewsRequest = async (news) => {
    const form = new FormData();
    for  (let key in news) {
        form.append(key, news[key]);
    }
    return await axios.post('http://localhost:4000/news', form, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}
    

export const deleteNewsRequest = async (id) =>
    await axios.delete(`http://localhost:4000/news/${id}`);

export const getNewRequest = async (id) =>
    await axios.get(`http://localhost:4000/news/${id}`);

export const updateNewsRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/news/${id}`, newFields);
