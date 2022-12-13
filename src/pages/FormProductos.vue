<template>
<center>
  <div>
  
    <h3>A&ntilde;adir productos</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos Producto</h5>

        
        <div class="form-group">
          <label for="formGroupExampleInput">Codigo</label>
          <input
            v-model="codigo"
            type="text"
            class="form-control"
            placeholder="Codigo producto"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Ingrese Nombre del Producto"
          />
        </div>
        <div class="form-group">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Precio</label>
          <input
            v-model="precio"
            type="text"
            class="form-control"
            placeholder="$0000"
          />
        </div>
        <button class="btn btn-primary" @click="addPersona">
          A&ntilde;adir
        </button>
      </div>
    </div>
  </div>
  </center>
   <br><br>
     <center><img class="logo" src="../assets/logo1.png"></center>
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
    const codigo = ref("")
    const precio = ref("")
    
    function addPersona(){
      if(nombre.value != '' && codigo.value != "" && precio.value != ""){
        const persona = {
          nombre:nombre.value,
          codigo:codigo.value,
          precio:precio.value
        }
        axios.post('https://ml2022-1e1b9-default-rtdb.firebaseio.com/producto.json',persona)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }

    return{nombre,codigo, precio, addPersona}
  }
};
</script>