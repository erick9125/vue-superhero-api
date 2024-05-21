## Table of Contents
1. [General Info](#general-info)
2. [Project Setup](#project-setup)
3. [API tpken](#api-token)
4. [API Reference](#api-reference)

# General Info
***
Proyecto realizado en vue en su versión 3 con composition api, consumiendo la api SuperHero API, adicionalmente se agrego tailwind css para dar algunos estilos a los campos y la info consumida.

#Vue Superhero App
## Project Setup
***
#bash del proyecto
$ npm install
$ cd vue-superhero-app
$ npm run dev

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
