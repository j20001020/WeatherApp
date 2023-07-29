import axios from 'axios';
import { apiKey } from '../config';

const forecastEndPoint = (city: string, days: number) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`
const locationEndPoint = (city: string) => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`

const apiCall = async (endpoint: string) => {
    const options = {
        method: 'GET',
        url: endpoint
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (err) {
        console.log('Error: ', err);
        return null;
    }
}

export const fetchWeatherForecastInfo = (city: string, days: number) => {
    return apiCall(forecastEndPoint(city, days));
}

export const fetchLoctionInfo = (city: string) => {
    return apiCall(locationEndPoint(city));
}