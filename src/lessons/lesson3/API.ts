import axios from 'axios';
import {settings} from "cluster";

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '?i=tt3896198&apikey=52eab7a1';
const axiosInstance = axios.create(configOMB);

const API = {

    searchFilmsByTitle: (newTitle: string) => {
        return new Promise((res, rej) => {
            if (!newTitle) {
                rej(console.log('Url is required'))
            } else {
                res(axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=52eab7a1')
                    .then(res => {
                        return res.data.Title
                    })
                )
            }
        })
            .then(res => {
                return res === newTitle ? res : 'No such movie'

            })
            .catch(err => console.log('Error:' + err))

    },

    searchFilmsByType: (title: string, type: string) => {
        return new Promise((res, rej) => {
            if (!type) {
                rej(console.log('Type is required'))
            } else {
                res(axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=52eab7a1')
                    .then(res => {
                        return res.data
                    }))
            }
        })
            .then((res:any) => {
            if (res.Title === title && res.Type === type) {
                return res.Title
            } else {
              return  'No such movie'
            }

        })
            .catch(err => console.log('Error:' + err))

    }

}

export default API;
