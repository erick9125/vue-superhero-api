<template>
    <div>
        <ul class="space-y-2">
            <li v-for="superhero in results" :key="superhero.id" @click="selectSuperhero(superhero.id)" class="p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-100">
                {{ superhero.name }}
            </li>
        </ul>
    </div>
</template>   

<script lang="ts">
import {defineComponent, PropType} from 'vue'; 

interface Superhero{
    id: string;
    name: string;
}

export default defineComponent({
    props: {
        results : {
            type: Array as PropType<Superhero[]>,
            required: true,
        },
    },

    emits: ['select'],
    setup(props, {emit}) {
        const selectSuperhero = (id: string) => {
            emit('select',id);
        };

        return {
            selectSuperhero,
        };
    },
});
</script>