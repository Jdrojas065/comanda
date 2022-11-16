<template>
    <div>
      <h3>Lista de personal</h3>
  
      <ul class="list-group">
        <li v-for="(personal, i) in personal" :key="i"  class="list-group-item">
          <router-link :to="`/detailsPerso/${personal.id}`">{{
            personal.nombre
          }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import {ref} from 'vue'
  export default {
    setup(){
      const personal = ref([])
      axios.get('https://vuexjdrg-default-rtdb.firebaseio.com/personal.json',personal)
      .then(res=>{
        console.log(res)
        for(const id in res.data){
          personal.value.push({
            id:id,
            nombre: res.data[id].nombre,
            cedula: res.data[id].cedula,
            mail: res.data[id].email,
            rol: res.data[id].rol,
          })
        }
      })
     .catch(error => console.log(error))
     return {personal};
    }
    /* computed: {
      personas() {
        return this.$store.getters.getPersonas;
      },
    }, */
  };
  </script>