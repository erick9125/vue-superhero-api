<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {defineComponent, ref} from 'vue'
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';
import SuperheroDetails from './components/SuperheroDetails.vue';
import superheroApi from './services/superheroApi';

//Definición de la interfaz para un superhéroe
interface Superhero {
  id: string;
  name: string;
  image: {url: string}
  biography: {
    'full-name' : string;
    'place-of-birth': string;
    publisher: string;
  };
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  }
}

export default defineComponent({
  components: {
    SearchBar,
    SearchResults,
    SuperheroDetails,
  },

  setup(){
    //Estado reactivo para almacenar los resultados de la búsqueda
    const superheroes = ref<Superhero[]>([]);
    //Estado reactivo para almacenar el superhéroe seleccionado
    const selectedSuperHero = ref<Superhero | null>(null);

    //Función paa buscar superhéroes usando la API
    const searchSuperheroes = async (name: string) => {
      try {
        const response = await superheroApi.searchSuperheroes(name);
        superheroes.value = response.data.results;
      }catch(error) {
        console.error(error);
      }
    };

    //Función para obtener detalles de un superhéroe específico
    const fetchSuperheroDetails = async(id: string) => {
      try {
        const response = await superheroApi.getSuperheroesDetails(id);
        selectedSuperHero.value = response.data;
      } catch(error) {
        console.error(error)
      }
    };
//Función para limpiar los datos de la busqueda
    const clearSearch = () => {
      superheroes.value = [];
      selectedSuperHero.value = null;
    }

    //retorna los estados y funciones para ser utilizados en el template
    return {
      superheroes,
      selectedSuperHero,
      searchSuperheroes,
      fetchSuperheroDetails,
      clearSearch,
    }
  }

});

</script>

<template>
  <div id="app" class="max-w-4xl mx-auto p-4 min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <SearchBar @search="searchSuperheroes" @clear="clearSearch"/>
      <SearchResults v-if="superheroes.length > 0" :superheroes="superheroes" @select="fetchSuperheroDetails" />
      <SuperheroDetails v-if="selectedSuperHero" :superhero="selectedSuperHero"/>
  </div>
</template>


