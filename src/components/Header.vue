<template>
  <nav class="navbar navbar-light nav-pills" style="background-color: #e3f2fd">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/regislog" class="nav-link" active-class="active"
            >Registro Usuarios</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/log" class="nav-link" active-class="active"
            >login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active"
            >Registro Productos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/print" class="nav-link" active-class="active"
            >Productos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/perso" class="nav-link" active-class="active"
            > Registro Personal </router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/persoData" class="nav-link" active-class="active"
            >Personal</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
