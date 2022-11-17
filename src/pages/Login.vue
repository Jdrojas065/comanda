<template>
 <div :style="mainStyle"> 
        <h1>Bienvenidos!{{nombreusuario}}</h1>
    <div class="form-group">
    <input
    v-model="nombreusuario"
     type="text"
     name="username"
     class="form-control"
     placeholder="Usuario"
     :style="input"
     /> 
    </div>
    <div class="form-group">
    <input
    v-model="password"
     type="password"
     name="password"
     class="form-control"
     placeholder="contraseña"
     :style="input"
     />
     </div>
     <div class="form-group">
     <button class="btn btn-primary" @click="buscarUsuario">
       ingresar
    </button>
     </div>
</div>
</template>




<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: "Login",

    props:{
        mainStyle: String,
        inpuStyle: String,
    },

    setup() {
        const usuarios = ref([])
        const nombreusuario = ref("")
        const password = ref("")
        function buscarUsuario(){
            axios.get('https://vueinventarioaxios-default-rtdb.firebaseio.com/usuarios.json')
            .then(res=>{
                console.log(res);

              for(const id in res.data){

                if(res.data[id].nombre === nombreusuario.value && res.data[id].password === password.value){
                    usuarios.value.push({
                        id: id,
                        nombre: res.data[id].nombre,
                        password: res.data[id].password,
                    })
                }
              }
              if(usuarios.value.length >=1){
                alert("Usuario y Contraseña Correcto")
              }else{
                alert("Usuario y Contraseña incorrecto")
              }
              usuarios.value= [];

            })
            .catch(error => console.log(error))
        }
        return {nombreusuario,password,usuarios,buscarUsuario};
        
    }
};
</script>
