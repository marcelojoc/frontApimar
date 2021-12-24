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
    })
  },

  methods: {},

  created: async function() {
    // let test = await api.getCharacters();
    // console.log("creadoooooooooo");
    // console.log(test.data.data);
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
  background-color: #15202b;
}
</style>
