<template>
  <footer class="footer-bar mt-5">
    <PoweredByFoot :icons="icons" />

    <hr class="my-5" />

    <div class="row">
      <div class="col-sm-6 mb-sm-0 mb-5">
        <FootLinks />
      </div>
      <div class="col-sm-6">
        <b-button pill variant="danger" @click="tester">{{ test }}</b-button>
        <b-button pill variant="success" @click="changeTest">Cambio el test</b-button>
        <MadeByFoot />
      </div>
    </div>
  </footer>
</template>

<script>
import MadeByFoot from "./MadeByFoot";
import PoweredByFoot from "./PoweredByFoot";
import FootLinks from "./FootLinks";
import { mapState, mapActions } from "vuex";

export default {
  name: "FooterBar",
  components: { FootLinks, PoweredByFoot, MadeByFoot },
  data() {
    return {
      icons: [
        {
          classes: ["volume-up-fill"],
          color: "#4fc08d",
          href: "https://vue.js.org/",
        },
        {
          classes: ["volume-up-fill"],
          color: "#7952b3",
          href: "https://bootstrap-vue.js.org/",
        },
        {
          classes: ["volume-up-fill"],
          href:
            "https://develop.battle.net/documentation/diablo-3/community-apis",
        },
        {
          classes: ["volume-up-fill"],
          color: "#e4e4e4",
          href: "https://github.com/baumannzone",
        },
        {
          classes: ["volume-up-fill"],
          color: "#0e95ff",
          href: "https://fontawesome.com/",
        },
      ],
    };
  },

  computed: {
    ...mapState("stadium", {
      test: "test",
      cliente: "cliente",
    }),
  },

  methods: {
    ...mapActions("stadium", {
      tester: "test",
      changeTest: "changeTest",
    }),

    pruebaIndex() {
      alert("èste  es un metodo de el  componente");
    },
  },
};
</script>
