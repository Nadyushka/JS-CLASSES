import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=52eab7a1').then(res=>res.data.title)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
