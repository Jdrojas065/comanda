import FormData from './pages/FormProductos.vue'
import PrintData from './pages/ProductosData.vue'
import Details from './pages/DetailsProducto.vue'
import Personal from './pages/FormPersonal.vue'
import PersonalData from './pages/PersonalData.vue'
import DetailsPerso from './pages/DetailsPersonal.vue'
import Login from './components/Login.vue'
import RegisLog from './pages/FormLogin.vue'
import Header from './components/Header.vue'

export const routes = [
    {path:'/prod', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/details/:index', component:Details},
    {path:'/perso', component:Personal},
    {path:'/persoData', component:PersonalData},
    {path:'/detailsPerso/:index', component:DetailsPerso},
    {path:'/log', component:Login},
    {path:'/regislog', component:RegisLog},
    {path:'/head', component:Header},
]