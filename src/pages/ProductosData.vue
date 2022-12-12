<template>
  <div>
    <h3>Lista de productos</h3>

    <ul class="list-group">
      <li v-for="(persona, i) in personas" :key="i"  class="list-group-item">
        <router-link :to="`/details/${persona.id}`">{{
          persona.nombre
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
    const personas = ref([])
    axios.get('https://ml2022-1e1b9-default-rtdb.firebaseio.com/producto.json')
    .then(res=>{
      console.log(res)
      for(const id in res.data){
        personas.value.push({
          id:id,
          nombre: res.data[id].nombre,
          codigo: res.data[id].codigo,
          /* mail: res.data[id].email, */
          precio: res.data[id].precio,
        })
      }
    })
   .catch(error => console.log(error))
   return {personas};
  }
  /* computed: {
    personas() {
      return this.$store.getters.getPersonas;
    },
  }, */
};
</script>

<style>
div{
color-scheme: black;
}
</style>