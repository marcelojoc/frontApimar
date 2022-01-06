<template>
  <div id="app">

    <LoadLayout v-if="isLoading">
      <BaseLoading variant="danger"/>
    </LoadLayout>
      
    <MainLayout v-else />
      

</div>

</template>

<script>
// @ is an alias to /src
//import api from "@/api/auth";

import { mapState } from 'vuex'
import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'
//import Api from '@/api/auth'

export default {
  name: "App",
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  data() {
    return {
      changeTest: 0,
    }
  },

  computed: {
    // Uso: mapState(moduleName, { state })
    ...mapState('loading', {
      isLoading: 'isLoading'
    }
    
    
    
    )
  },

  methods: {},

  created:  function() {


    // let test = await Api.getCharacters();
    // console.log("creadoooooooooo");
    // console.log(test);
  },
};
</script>


<style>
#app {
  padding: 60px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #24384d;
}
</style>
