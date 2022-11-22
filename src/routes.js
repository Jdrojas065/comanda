import FormData from './pages/FormData.vue'
import PrintData from './pages/PrintData.vue'
import Details from './pages/Details.vue'
import Personal from './pages/Personal.vue'
import PersonalData from './pages/PersonalData.vue'
import DetailsPerso from './pages/DetailsPerso.vue'
import Login from './pages/Login.vue'
import RegisLog from './pages/RegisLog.vue'

export const routes = [
    {path:'/', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/details/:index', component:Details},
    {path:'/perso', component:Personal},
    {path:'/persoData', component:PersonalData},
    {path:'/detailsPerso/:index', component:DetailsPerso},
    {path:'/log', component:Login},
    {path:'/regislog', component:RegisLog},
]