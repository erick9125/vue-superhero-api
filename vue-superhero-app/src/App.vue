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
  biography: {
    'full-name' : string;
    publisher: string;
  };
}

export default defineComponent({
  components: {
    SearchBar,
    SearchResults,
    SuperheroDetails,
  },

  setup(){
    //Estado reactivo para almacenar los resultados de la búsqueda
    const results = ref<Superhero[]>([]);
    //Estado reactivo para almacenar el superhéroe seleccionado
    const selectedSuperHero = ref<Superhero | null>(null);

    //Función paa buscar superhéroes usando la API
    const searchSuperheroes = async (name: string) => {
      try {
        const response = await superheroApi.searchSuperheroes(name);
        results.value = response.data.results;
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

    //retorna los estados y funciones para ser utilizados en el template
    return {
      results,
      selectedSuperHero,
      searchSuperheroes,
      fetchSuperheroDetails
    }
  }

});

</script>

<template>
  <div id="app" class="max-w-4xl mx-auto p-4 bg-lightBlue min-h-screen">
      <SearchBar @search="searchSuperheroes" />
      <SearchResults :results="results" @select="fetchSuperheroDetails" />
      <SuperheroDetails v-if="selectedSuperHero" :superhero="selectedSuperHero"/>
  </div>
</template>


