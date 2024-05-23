import axios from 'axios';

//Se genera la base URL de la API para ser consumida
const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type' : 'application/json',
    },
});

//se reemplaza por el token de la cuenta de github que inicia sesión en la pagina superheroapi
const accessToken = '338148107599656';

export default {
    //Función para buscar superhéroes por nombre
    searchSuperheroes(name: string){
        return apiClient.get(`/${accessToken}/search/${name}`);
    },

    //Función para obtener detalles de un superhéroe por ID
    getSuperheroesDetails(id: string){
        return apiClient.get(`/${accessToken}/${id}`);
    }
}