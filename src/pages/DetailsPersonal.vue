<template>
    <div>
      <div class="card" v-if="personal != undefined">
        <h5 class="card-header">{{ personal.nombre }}</h5>
        <div class="card-body">
          <div class="card-text">
            <p>email : {{personal.email}}</p>
            <p>Cedula : {{personal.cedula}}</p>
            <p>rol: {{personal.rol}}</p>
          </div>
         
        </div>
      </div>
  
      <div v-else class="alert alert-danger" role="alert">
        No hay datos disponibles
      </div>
      <router-link to="/print" class="btn btn-primary mt-3">Volver</router-link>
    </div>
  </template>
  
  <script>
  /* import {computed} from 'vue' */
  /* import {useStore} from 'vuex' */
  import {useRoute} from 'vue-router'
  import {ref} from 'vue'
  import axios from 'axios'
  
  export default {

    setup(){
      
      /* const store = useStore() */
      const route = useRoute()
      const personal = ref("")
  
      /* const persona = computed(()=>{ */
        const index = route.params.index;
      /* return store.getters.getPersona(index);
    }) */
      axios.get('https://ml2022-1e1b9-default-rtdb.firebaseio.com/personal/'+index+'.json')
      .then(res => {
        console.log(res)
        personal.value = res.data
      })
      .catch(error => console.log(error))
      return {personal}
    }
    // computed: {
    //   persona() {
    //     const index = this.$route.params.index;
    //     return this.$store.getters.getPersona(index);
    //   },
    // },
  };
  </script>