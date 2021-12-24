<template>
  <div class="home">
   
   <home-title/>
   <home-form/> 
    
  </div>
</template>

<script>
// @ is an alias to /src
import homeTitle from "@/views/home/HomeTitle"
import homeForm from '@/views/home/HomeForm'

export default {
  name: 'Home',
  components: { homeTitle, homeForm
    
  }
}
</script>
