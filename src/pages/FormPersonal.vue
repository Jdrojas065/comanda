<template>
    <div>
      <h3>A&ntilde;adir personal</h3>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">Datos Personal</h5>
  
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Armando Casas"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">E-mail</label>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="aagudelo@email.com"
            />
          </div>
          
          <div class="form-group">
            <label for="formGroupExampleInput2">Rol</label>
            <input
              v-model="rol"
              type="text"
              class="form-control"
              placeholder="cajero"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Cedula</label>
            <input
              v-model="cedula"
              type="text"
              class="form-control"
              placeholder="ej. 1097..."
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
      const nombre = ref("")
      const email = ref("")
      const rol = ref("")
      const cedula = ref("")
      
      function addPersonal(){
        if(nombre.value != '' && email.value != "" && rol.value != "" && cedula.value != ""){
          const personal = {
            nombre:nombre.value,
            email:email.value,
            rol:rol.value,
            cedula:cedula.value,
          }
          /* store.dispatch("addPersona", persona);
          router.push('/print') */
          axios.post('https://ml2022-1e1b9-default-rtdb.firebaseio.com/personal.json',personal)
          .then(res => console.log(res))
          .catch(error => console.log(error))
        }
      }
  
      return{nombre, email, rol, cedula, addPersonal}
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