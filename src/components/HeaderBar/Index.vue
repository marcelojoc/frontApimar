<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <h1 class="arbonie">{{enviroment}}</h1>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand :to="{ name: 'Home' }">
          <img src="https://picsum.photos/300/300/?image=3" alt="D3" width="30">
          <span class="font-diablo ml-2">D3PF</span>
        </b-navbar-brand>
      </b-navbar>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HeaderBar',

    data() {
    return {
      enviroment: process.env.VUE_APP_ENVIROMENT,
    }
  },
}
</script>