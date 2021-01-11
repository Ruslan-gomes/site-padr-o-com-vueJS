<template>
    <main>
        <h1>Sobre</h1>
        <div class="about" v-html="sobre"></div>
    </main>
</template>

<script>

import api from '@/services/api.js';

export default {
    name: 'sobre',
    data(){
        return{
            sobre: ''
        }
    },
    mounted(){
        api.get('/about.json').then(response =>{
            this.sobre = response.data.about
        });
    }
}
</script>

<style scoped>
.about{
    margin-bottom: 40px;
    color: var(--color-text-dark);
}
</style>