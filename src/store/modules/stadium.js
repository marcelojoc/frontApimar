export default {
    namespaced: true,
    state: {
      test: 'esto es una prueba  de modulo stadium',
      cliente:{name:'robert'}
    },
    mutations: {

        

    },


    getters: {


        getCliente (state){

            return state.test

        },
    }
  }