<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {defineComponent, ref} from 'vue'
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';
import SuperheroDetails from './components/SuperheroDetails.vue';
import superheroApi from './services/superheroApi';

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
    const results = ref<Superhero[]>([]);
    const selectedSuperHero = ref<Superhero | null>(null);

    const searchSuperheroes = async (name: string) => {
      try {
        const response = await superheroApi.searchSuperheroes(name);
        results.value = response.data.results;
      }catch(error) {
        console.error(error);
      }
    };

    const fetchSuperheroDetails = async(id: string) => {
      try {
        const response = await superheroApi.getSuperheroesDetails(id);
        selectedSuperHero.value = response.data;
      } catch(error) {
        console.error(error)
      }
    };

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


