<template>
  <div class="bg-gray-50 min-w-screen min-h-screen flex justify-center items-center">
    <div class="max-w-xs relative space-y-3">
      <label
        for="search"
        class="text-gray-900"
      >
       Selecione Producto: 
      </label>
      
      <input
        type="text"
        id="search"
        v-model="searchTerm"
        placeholder="Type here..."
        class="p-3 mb-0.5 w-full border border-gray-300 rounded"
      >
     
      <ul
        v-if="searchCountries.length"
        class="w-full rounded bg-white border border-gray-300 px-4 py-2 space-y-1 absolute z-10"
      >
      <br>
        <li class="px-1 pt-1 pb-2 font-bold border-b border-gray-200">
          Showing {{ searchCountries.length }} of {{ countries.length }} results
        </li>
        <li
            v-for="country in searchCountries"
            :key="country.name"
            @click="selectCountry(country.name)"
            class="cursor-pointer hover:bg-gray-100 p-1"
        >
          {{ country.name }}
        </li>
      </ul>
      
      <p
        v-if="selectedCountry"
        class="text-lg pt-2 absolute"
        
      >
        El producto seleccionado es: <span class="font-semibold"  v-on:keypress.enter="nuevoFila()"
        :loading="loading">{{ selectedCountry }}</span>
      </p>
      
      <form action="/action_page.php">
        <li>
          <label for="pago">Cantidad: </label>
          <input type="text" v-model="Canti"  v-on:keypress.enter="nuevoFila()" >
         </li>
         <br>
         <li>
          <label for="pago">Codigo: </label>
           <input type="text" v-model="Codigoes"  v-on:keypress.enter="nuevoFila()" >
         </li>
         <br>
         <li>
             <label for="pago">Valor: </label>
          <input type="text" v-model="Valors"  v-on:keypress.enter="nuevoFila()" >
         </li>
         <br>
         <li>
           <label for="pago">Metodo de Pago: </label>
           <select  v-model="pago"  v-on:keypress.enter="nuevoFila()" >
           <option  value="Efectivo" >Efectivo</option>
           <option value="Tarjeta">Tarjeta</option>
           <option value="Nequi">Nequi</option>
           </select >
         </li>
         <br>
         <li>
           <label for="emple">Elija Empleado: </label>
           <select  v-model="emple"  v-on:keypress.enter="nuevoFila()" >
           <option value="Sofia">Sofia</option>
           <option value="Sebastian">Sebastian</option>
           <option value="Oscar">Oscar</option>
           <option value="Maria">Maria</option>
           </select >
         </li>
         <br>
         <li>
             <label for="pago">Descripcion: </label>
           <input type="text" v-model="Des"  v-on:keypress.enter="nuevoFila()" >
         </li>
         <br>
       </form>
        <hr>
 
    </div>
    <div class="contenedor" >
      <div  id="element-to-convert">
      <center>
        <br>

         <table border="2" >
          
         <thead>
             <tr class="columnas">
             <td><b>Numero</b></td>
             <td><b>Producto</b></td>
             <td><b>Cantidad</b></td>
             <td><b>Codigo</b></td>
             <td><b>Valor</b></td>
             

            
          </tr>
          
         </thead>
         
             <tbody>
                 <tr class="columnas" v-for="({Nombre,Cantidad,Codigo,Valor},index) in product" :key="index">
                     <td>{{index+1 }}</td>
                     <td>{{Nombre}}</td>
                     <td>{{Cantidad}}</td>
                     <td>{{Codigo}}</td>
                     <td>{{V=(Cantidad*Valor)}}</td>
                   
                     
              </tr>

             
         </tbody>
        
         </table> 
         <br>   
        <table border="2" >
          <thead>
            <tr class="filas">
             <th>Metodo de pago</th>
              <th>Empleado</th>
              <th>Descripcion</th>
              
              
 
           </tr>
         </thead>

         <tbody>
          <tr class="filas" v-for="({Metodo,Empleado,Descripcion,},index) in product" :key="index">
           
           <th>{{Metodo}}</th>
           <td>{{Empleado}}</td>
           <td>{{Descripcion}}</td>

           </tr>
    
         </tbody>
      </table>
      </center>
    </div>
     
       </div>
      <center>
       <button @click="exportToPDF">PDF</button>
      </center>
      <br>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import html2pdf from 'html2pdf.js'
const product=[
          //  {Nombre: '' , Codigo: '', Valor:'',Metodo:'',Empleado:'',Cantidad:'',Descripcion:'',Edad:''},
       ]
export default {
  data(){
       return {product,
           newNombre: "",
           Canti:"",
           Codigoes:"",
           Valors:"",
           pago:"",
           emple:"",
           Des:"",

           loading: false,
       }}
       ,
       
  setup() {
    let searchTerm = ref('')

    const countries = [
      {"name": "Hamburguesa Clasica de Pollo"},
     {"name": "Hamburguesa Clasica"},
     {"name": "Hamburguesa Mixta"},
     {"name": "Hamburguesa Mega Chicken"},
     {"name": "Hamburguesa Ranchera"},
     {"name": "Hamburguesa Mi Local"},
     {"name": "Hamburguesa Fusion Burger"},
     {"name": "Hamburguesa American Cheese"},
     {"name": "Hamburguesa Mixta Increible"},
     {"name": "Hamburguesa Americana"},
     {"name": "Hamburguesa American Bacon"},
     {"name": "Hamburguesa Local Master"},
     {"name": "Hamburguesa Super"},
     {"name": "Hamburguesa Local a Caballo"},
     {"name": "Hamburguesa Pasion Burger"},
     {"name": "Hamburguesa Marinera"},
     {"name": "Hamburguesa Mixta Apanada"},
     {"name": "Hamburguesa Megaburger"},
     {"name": "Adicional de Hamburguesa: Patacon/Arepa"},
     {"name": "Perro SuperPerro"},
     {"name": "Perro Americano"},
     {"name": "Perro Mixto"},
     {"name": "Perro Clasico"},
     {"name": "Perro ChoriPerro"},
     {"name": "Choripapa"},
     {"name": "Salchipapa"},
     {"name": "Papas Locas Locales"},
     {"name": "Papas Locas Carnivoras"},
     {"name": "Papas Locas SuperPapas"},
     {"name": "Papas Locas Marineras"},
     {"name": "Papas Locas Costeñas"},
     {"name": "Papas Locas Marranitas"},
     {"name": "Papas Locas Granjeras"},
     {"name": "Desgranado Pollo Camaron"},
     {"name": "Desgranado Mixto"},
     {"name": "Desgranado Costillitas"},
     {"name": "Desgranado Carne"},
     {"name": "Desgranado Pollo"},
     {"name": "Alitas x6"},
     {"name": "Alitas x10"},
     {"name": "Alitas x20"},
     {"name": "Infantil Nuggets"},
     {"name": "Infantil Mini Hamburguesa"},
     {"name": "Chatas 250g"},
     {"name": "Chatas 500g"},
     {"name": "Pechuga Gratinada"},
     {"name": "Pechuga Apanada"},
     {"name": "Pechuga a la Parrilla"},
     {"name": "Ceviche Maxi"},
     {"name": "Ceviche Coctel Lupe"},
     {"name": "Ceviche Peruano"},
     {"name": "Costillitas 250g"},
     {"name": "Costillitas 500g"},
     {"name": " "},
     {"name": " "},

  ]
    const searchCountries = computed(() => {
      if (searchTerm.value === '') {
        return []
      }
      let matches = 0
      return countries.filter(country => {
        if (country.name.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
          matches++
          return country
        }
      })
    });
    const selectCountry = (country) => {
      selectedCountry.value = country
      searchTerm.value = ''
    }
    let selectedCountry = ref('')
    return {
      countries,
      searchTerm,
      searchCountries,
      selectCountry,
      selectedCountry
    }
  },
  methods:{
        nuevoFila(){
           console.log("dio enter")
           this.product.unshift({
               Nombre:this.selectedCountry,
               Codigo:this.Codigoes,
               Valor:this.Valors,
               Metodo:this.pago,
               Empleado:this.emple,
               Cantidad:this.Canti,
               Descripcion:this.Des,
               Edad:2022-this.eda,
   
           }) 
},
exportToPDF() {
        html2pdf(document.getElementById("element-to-convert"), {
                  margin: 1,
                filename: "i-was-html.pdf",
              });
      },
  }
}
</script>
<style>
h1 {
  text-align: center;
  font-size: 75px;
  font-family: 'Tahoma'
}
h1 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
.contenedor {
  margin: 50px 0;
}






  h1{
      color: rgb(197, 78, 4);
  }
  thead{
      background-color: #db8e49;
  }
  table{
    background-color: rgb(255, 255, 255);
  }
 .contenedor{
     
     display: inline-bock;
     ;
 }
 .columnas{
     text-align: center;
     
 }
 hr{
  border: 3px solid  rgb(197, 78, 4);
  
 }
 

text{
  background-color: aliceblue;
}

input{
  border: 1px solid #2f2f2f;
}
select{
border: 1px solid #2f2f2f;
}
.v-input__slot{
margin: -40px 130px ;
width: 20%;
}
#input-25{
margin: -40px -110px
}
</style>