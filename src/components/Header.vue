<template>
  <nav class="navbar navbar-light nav-pills" style="background: linear-gradient(to right, #5b2b03 8%, #c54e04 100%);">
    <div class="con1" > 
      <ul class="nav">
        <li class="nav-item" >
          <router-link to="/log" class="nav-link" active-class="active"
            >MI LOCAL</router-link
          >
        </li>
        <ul class="nav1">
        <li class="nav-item" v-if="verificar">
          <router-link to="/regislog" class="nav-link" active-class="active"
            >Registro Usuarios</router-link
          >
        </li>
        <li class="nav-item" v-if="verificar">
          <router-link to="/Comanda" class="nav-link" active-class="active"
            >Comanda</router-link
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
        <ul class="nav2">
        <li class="nav-item" v-if="verificar">
          <a class="nav-link" href="./log"><img class="logo" src="../assets/salir.png"></a>
        </li>
        </ul>
      </ul>
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
a{
color:rgb(10, 10, 10)
}
a.nav-link{
color:rgb(255, 255, 255)
}
a:hover{
  color:rgb(235, 235, 235)
  }
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
  color: rgb(0, 0, 0);
  background-color: #f7c295;
  border-color: #8d430e;
}
.form-control{
  color: #FFF;
  background-color: #db8e49;
  border-color: #a24b0d;
  
  
}
.form-control1{
  color: #FFF;
  background-color: #db8e49;
  border-color: #a24b0d;
  width: 50%;
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #a24b0d;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  
}
.form-control:hover{
  color: #FFF;
  background-color: #db8e49;
  border-color: #a24b0d;
}
.btn-primary{
  color: #FFF;
  background-color: #e37719;
  border-color: #a24b0d
}
.btn-primary:hover{
  color: rgb(0, 0, 0);
  background-color:  #ca6c1a;
  border-color:  #8d430e;
}
.btn-primary:link{
  color: rgb(0, 0, 0);
  background-color:  #ca6c1a;
  border-color:  #8d430e;
}
.btn-primary:active{
  color: rgb(0, 0, 0);
  background-color:  #ca6c1a;
  border-color:  #8d430e;
}
.logo{
  width:500px,
}
.nav1 {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 400px;
    margin-bottom: 0;
    list-style: none;
    padding-top: 0;
}
.nav2 {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 450px;
    margin-bottom: 0;
    list-style: none;
    padding-top: 0;
}
.bar {
    color: #FFF;
    background-color: #db8e49;
    border-color: #a24b0d;
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>