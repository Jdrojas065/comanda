<template>
    <div>
      <h3>A&ntilde;adir personal</h3>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">Datos Personal</h5>
  
          <div class="form-group">
            <label for="formGroupExampleInput">E-Mail</label>
            <input
              v-model="nombreusuario"
              type="text"
              class="form-control"
              placeholder="Armando Casas"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Contraseña</label>
            <input
              v-model="contra"
              type="text"
              class="form-control"
              placeholder="aagudelo@email.com"
            />
          </div>
          <button class="btn btn-primary" @click="addPersonal">
            A&ntilde;adir
          </button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  /*eslint-disable*/
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'
  import axios from 'axios'
  export default {
    setup(){
      const store = useStore()
      const router = useRouter()
      const nombreusuario = ref("")
      const contra = ref("")
      
      function addPersonal(){
        if(nombreusuario.value != '' && contra.value != ""){
          const personal = {
            nombreusuario:nombreusuario.value,
            contra:contra.value
          }
          /* store.dispatch("addPersona", persona);
          router.push('/print') */
          axios.post('https://vuexjdrg-default-rtdb.firebaseio.com/persona.json',personal)
          .then(res => console.log(res))
          .catch(error => console.log(error))
        }
      }
  
      return{nombreusuario, contra, addPersonal}
    }
    // data() {
    //   return {
    //     nombre: "",
    //     email: "",
    //     aporte: "",
    //   };
    // },
    // methods: {
    //   addPersona() {
    //     if (this.nombre != "" && this.email != "") {
    //       const persona = {
    //         nombre: this.nombre,
    //         email: this.email,
    //         aporte: this.aporte,
    //       };
    //       this.$store.dispatch("addPersona", persona);
    //       this.$router.push('/print')
    //     }
    //   },
    // },
  };
  </script>