import axios from 'axios';

const API_KEY = '013607f193a922d29b7daa005e800c5b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // returns a promise here

    return {
        type: FETCH_WEATHER,
        payload: request // return promise as payload
    }
}
