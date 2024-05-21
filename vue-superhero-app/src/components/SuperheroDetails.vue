<template>
    <div v-if="superhero" class="p-4 border border-gray-300 rounded">
        <h2 class="text-2xl font-bold mb-2">{{ superhero.name }}</h2>
        <p class="mb-2"><strong>Nombre Completo: </strong>{{ superhero.biography['full-name'] }}</p>
        <p class="mb-2"><strong>Editor: </strong> {{ superhero.biography.publisher }}</p>
    </div>
</template>

<script lang="ts">
    import {defineComponent, PropType} from 'vue'; 

    interface Superhero {
        id: string;
        name: string;
        biography: {
            'full-name' : string;
            publisher: string;
        };
    }

    export default defineComponent({
        props: {
            superhero : {
                type: Object as PropType<Superhero>,
                    required: true,
            },
        },
    });
</script>