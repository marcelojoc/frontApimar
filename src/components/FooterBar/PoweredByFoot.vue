<template>
  <div class="text-center ">
    <p class="text-muted">Powered by</p>

    <ul class="list-inline">
      <li class="list-inline-item mx-2" v-for="(icon, idx) in icons" :key="idx">
        <a :href="icon.href" target="_blank" :title="icon.href">
          <!-- <font-awesome-icon :icon="icon.classes" class="fa-lg" :style="{'color': icon.color}"/> -->
          <b-icon :icon="icon.classes" font-scale="1" ></b-icon>
          <b-icon icon="volume-up-fill" font-scale="1"></b-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PoweredByFoot',
  props: {
    icons: {
      required: true,
      type: Array
    }
  }
}
</script>