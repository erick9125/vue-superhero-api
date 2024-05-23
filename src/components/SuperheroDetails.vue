<template >
    <div v-if="superhero" class="p-4 border border-gray-300 rounded bg-white text-gray-800 mt-5">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 sm:col-span-12 lg:col-span-4">
                <img :src="proxyImageUrl(superhero.image.url)" @error="imageLoadError" alt="superhero image" class="w-32 h-32 mb-4">
            </div>
            <div class="col-span-12 sm:col-span-12 lg:col-span-8">
                <h2 class="text-2xl font-bold mb-2">{{ superhero.name }}</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="mb-2"><strong>Nombre Completo: </strong>{{ superhero.biography['full-name'] }}</p>
                        <p class="mb-2"><strong>Lugar de nacimiento: </strong>{{ superhero.biography['place-of-birth'] }}</p>
                        <p class="mb-2"><strong>Editor: </strong> {{ superhero.biography.publisher }}</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-2">Estadisticas de poder:</h3>
                        <p><strong>Inteligencia:</strong> {{ superhero.powerstats.intelligence }}</p>
                        <p><strong>Fortaleza:</strong> {{ superhero.powerstats.strength }}</p>
                        <p><strong>Velocidad:</strong> {{ superhero.powerstats.speed }}</p>
                        <p><strong>Durabilidad:</strong> {{ superhero.powerstats.durability }}</p>
                        <p><strong>Poder:</strong> {{ superhero.powerstats.power }}</p>
                        <p><strong>Combate:</strong> {{ superhero.powerstats.combat }}</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
    </div>
</template>

<script lang="ts">
    import {defineComponent, type PropType} from 'vue'; 

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
        //Define las propiedades que el componente puede recibir
        props: {
            superhero : {
                type: Object as PropType<Superhero>,
                    required: true,
            },
        },
        methods: {
            proxyImageUrl(url: string){
                return `https://cors-anywhere.heroku.com/${url}`;
            },
            imageLoadError(event: Event)
            {
                (event.target as HTMLImageElement).src = '/default-superhero.jpg';
            }
        }
    });
</script>