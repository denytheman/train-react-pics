import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7c9df5a737e4e9a52014b30a1a099130c9fe4467926f81d18be5c38a25da3ace'
    }
})