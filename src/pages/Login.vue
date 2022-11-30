<template>
 <div :style="mainStyle"> 
        <h1>Bienvenido {{nombreusuario}}!</h1>
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
import { useRouter } from 'vue-router';

export default {
    name: "Login",

    props:{
        mainStyle: String,
        inpuStyle: String,
    },

    setup() {
        const router = useRouter()
        const usuarios = ref([])
        const nombreusuario = ref("")
        const password = ref("")
        function buscarUsuario(){
            axios.get('https://vuexjdrg-default-rtdb.firebaseio.com/persona.json')
            .then(res=>{
                console.log(res);
console.log(nombreusuario.value ,"usuario")
console.log(nombreusuario.value ,"password")
              for(const id in res.data){

                if(res.data[id].nombreusuario === nombreusuario.value && res.data[id].contra === password.value){
                    usuarios.value.push({
                        id: id,
                        nombre: res.data[id].nombre,
                        password: res.data[id].password,
                    })
                }
              }
              if(usuarios.value.length >=1){
                alert("usuario correcto")
                router.push("/head")
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
