<template>
  <nav class="navbar navbar-light nav-pills" style="background-color: #e3f2fd">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/log" class="nav-link" active-class="active"
            >Login</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/regislog" class="nav-link" active-class="active"
            >Registro Usuarios</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/prod" class="nav-link" active-class="active"
            >Registro Productos</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/print" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/perso" class="nav-link" active-class="active"
            > Registro Personal </router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/persoData" class="nav-link" active-class="active"
            >Personal</router-link
          >
        </li>
        <button><a href="./log">cerrar sesion</a></button>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      error:false,
      mostrar: this.$store.state.mostrar
    }
  },
  computed:{
    verificar(){
      return this.$store.state.mostrar
    },
  },
}
</script>

<style>
button{
  border: bold;
  left: 100%;
}
</style>