import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://superheroapi.com/api',
    headers: {
        'Content-Type' : 'application/json',
    },
});

const accessToken = 'token de la cuenta github' //se reemplaza por el token de la cuenta de github

export default {
    searchSuperheroes(name: string){
        return apiClient.get(`/${accessToken}/search/${name}`);
    },
    getSuperheroesDetails(id: string){
        return apiClient.get(`/${accessToken}/${id}`);
    }
}