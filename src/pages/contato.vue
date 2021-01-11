<template>
    <main>
        <section class="contacts">
            <h1>Contato</h1>
            <div class="contact" v-for="(contact, index) in contacts" :key="index">
                <div class="contact-title">{{contact.title}}</div>
                <a :href="contact.link" target="blank">{{contact.label}}</a>
            </div>
        </section>
    </main>
</template>

<script>

import api from '@/services/api.js';

export default {
    name: 'contato',
    data(){
        return{
            contacts: []
        }
    },
    mounted(){
        api.get('/contacts.json').then(response =>{
            this.contacts = response.data
        });
    }
}
</script>

<style scoped>
.contacts{
    
}

.contact{
    margin-bottom: 40px;
    color: var(--color-text-dark);
}
</style>