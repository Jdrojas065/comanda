import FormData from './pages/FormData.vue'
import PrintData from './pages/PrintData.vue'
import Details from './pages/Details.vue'
import Personal from './pages/Personal.vue'
import PersonalData from './pages/PersonalData.vue'

export const routes = [
    {path:'/', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/details/:index', component:Details},
    {path:'/perso', component:Personal},
    {path:'/persoData', component:PersonalData}
]