import axios from 'axios';

export const FETCH_NEWS = "FETCH_NEWS";

const API_KEY = 'ea94d19eda5e4d5cb436b7065e55608e';
const ROOT_URL = `https://newsapi.org/v2/top-headlines?`


export function fetchNews(term) {
    const url = `${ROOT_URL}q=${term}&apiKey=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_NEWS,
        payload: request
    };
}