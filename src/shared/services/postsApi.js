import axios from 'axios';

const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params: {
            key: '23804711-e5db832661be90b16b7b53877',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            }
})

export const searchPosts = async (q, page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            q,
            page,
                }
    });
    return data.hits;
}