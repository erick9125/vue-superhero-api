## Table of Contents
1. [General Info](#general-info)
2. [Project Setup](#project-setup)
3. [API tpken](#api-token)
4. [API Reference](#api-reference)
5. [Technologies](#technologies)
6. [Authors](#authors)

# General Info
***
Proyecto realizado en vue en su versión 3 con composition api, consumiendo la api SuperHero API, adicionalmente se agrego tailwind css para dar algunos estilos a los campos y la info consumida.

#Vue Superhero App
## Project Setup
***
#bash del proyecto
```
$ npm install
$ cd vue-superhero-app
$ npm run dev
```

## API TOKEN
***
#la Api https://superheroapi.com/api requiere token, este se debe cambiar en el archivo de la carpeta services llamado superheroApi.ts

## API Reference
***
#### Get buscador por nombre

```http
  GET /api/${access-token}/search/${name}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `access-token` | `string` | **Required**  token proporcionado por cuenta github|
| `name` | `string` | **Required**  Nombre ingresado en la busqueda|

#### Get item por id

```http
  GET /api/${access-token}/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :------------------------- |
| `access-token` | `string` | **Required**  token proporcionado por cuenta github|
| `id`      | `string` | **Required**. ID del artículo a buscar |

## Technologies
***
La lista de tecnologías utilizadas en el proyecto:
* [Vue/cli](https://vuejs.org/): Version 3.4.21
* [Axios](https://axios-http.com/): Version 1.7.1
* [Nodejs](https://nodejs.org/): Version 20.1.4
* [Tailwindcss](https://tailwindcss.com/): Version 3.4.3
* [Typescript](https://www.typescriptlang.org/): Version 5.4.0
* [Vite](https://vitejs.dev/): Version 15.2.8

## Authors
***
- [@erick9125](https://www.github.com/erick9125)