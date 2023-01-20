import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '?i=tt3896198&apikey=52eab7a1';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (newTitle: string) => {
        let promise = new Promise((res) => {
            res(axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=52eab7a1')
                .then(res => res.data.title))
        })

        promise.then(res => {
            if (res === newTitle) {
                return res
            }  else {
                return '000'
            }
        })


    },
    searchFilmsByType: (title: string, type: string) => {
        let promise = new Promise((res) => {
            res(axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=52eab7a1')
                .then(res => res.data))

            promise.then(res=>{
            if (res.title === title) {
                return res
            }  else {
                return '000'
            }
        })
    }
}

}

export default API;
