<template>
    <div>
        <ul class="space-y-2">
            <li v-for="superhero in superheroes" :key="superhero.id" @click="selectSuperhero(superhero.id)" class="p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 bg-white text-gray-800">
                {{ superhero.name }}
            </li>
        </ul>
    </div>
</template>   

<script lang="ts">
import {defineComponent, type PropType} from 'vue'; 

//Definición de la interfaz para un superhéroe
interface Superhero{
    id: string;
    name: string;
}

export default defineComponent({
    //Define las propiedades que el componente puede recibir
    props: {
        superheroes : {
            type: Array as PropType<Superhero[]>,
            required: true,
        },
    },

    //Emite el evento 'select' al componente padre
    emits: ['select'],
    setup(props, {emit}) {
        //Función para emitir el evento de selección de un superhéroe
        const selectSuperhero = (id: string) => {
            emit('select',id);
        };

        //retorna la función para ser utilizada en el template
        return {
            selectSuperhero,
        };
    },
});
</script>