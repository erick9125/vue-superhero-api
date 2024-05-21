<template>
    <div class="text-center mb-4">
        <h1 class="text-3xl font-bold mb-4">Bienvenido al buscador de Super Héroes</h1>
        <input v-model="searchQuery" @input="onSearch" placeholder="Ingresa el nombre de un super héroe..." class="w-full p-2 border border-gray-300 rounded">
    </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
export default defineComponent({
    emits: ['search'],
    setup(_, {emit}){
        const searchQuery = ref<string>('');

        const onSearch = () => {
            emit('search', searchQuery.value);
        };

        return {
            searchQuery,
            onSearch,
        };
    },
});
</script>