export default {
    namespaced: true,
    state: {
      test: 'esto es una prueba  de modulo stadium',
      cliente:{name:'robert'}
    },
    mutations: {

      SET_PRODUCT(state, payload) {
        state.test = payload;
       },

    },

    actions:{

      test(){

        console.log('action desde  StoreStadium');
      },

      changeTest({ commit }){

        console.log('action desde  Store Cambioando el test');
        commit("SET_PRODUCT", 'action desde  StoreStadium');
      }


    },


    getters: {


        getCliente (state){

            return state.test

        },
    }
  }