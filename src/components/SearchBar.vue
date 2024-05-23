<template>
    <div class="text-center mb-4">
        <h1 class="text-3xl font-bold mb-4">Bienvenido al buscador de Super Héroes</h1>
        <input v-model="searchQuery" @input="onSearch" placeholder="Ingresa el nombre de un super héroe..." 
        class="w-full p-2 border border-gray-300 rounded text-gray-700">
        <button @click="clearSearch" class="mt-2 p-2 bg-red-500 text-white rounded">Limpiar Busqueda</button>
    </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
export default defineComponent({
    //Emite un evento 'search' al componente padre
    emits: ['search','clear'],
    setup(_, {emit}){
        //estado reactivo para la consulta de búsqueda
        const searchQuery = ref<string>('');

        //Función para emitir el evento de búsqueda
        const onSearch = () => {
            emit('search', searchQuery.value);
        };

        const clearSearch = () => {
            searchQuery.value = '';
            emit('clear');
        };

        //retnrona el estado y la función para ser utilizados en el template
        return {
            searchQuery,
            onSearch,
            clearSearch,
        };
    },
});
</script>