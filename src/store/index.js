import {createStore} from 'vuex'

export const store = createStore({
    state:{
        personas:[{nombre:'Marcela Orrego', email:'marce@foto.com', aporte:'Cerveza'}],
        personal:[{nombre:''}]
    },
    getters:{
        getPersonas:state => {
            return state.personas
        },
        getPersona:(state) => (index) => {
            return state.personas[index]
        },
        getPersonal:state => {
            return state.personal
        },
        getPersonaldos:(state) => (index) => {
            return state.personal[index]
        }
    },
    mutations:{
        addPersona(state, payload){
            state.personas.push(payload)
        },
        addPersonal(state, payload){
            state.personal.push(payload)
        },
    },
    actions:{
        addPersona(context, payload){
            context.commit('addPersona', payload)
        },
        addPersonal(context, payload){
            context.commit('addPersonal', payload)
        }
    }
    
})