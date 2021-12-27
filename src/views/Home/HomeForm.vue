<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <!-- Formulario -->
        <b-form @submit.prevent="onSubmit">

          <!-- Grupo 1 (Input texto) -->
          <b-form-group
            id="input-group-1"
            label="BattleTag:"
            label-for="input-text"
            description="Format: YourProfile#1234"
          >
            <b-form-input
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="BattleTag"
            />
          </b-form-group>

          <!-- Grupo 2 (Selector de región) -->
          <b-form-group id="input-group-3" label="Region:" label-for="input-region">
            <b-form-select
              id="input-region"
              v-model=form.option
              size="lg"
              :options="optional"
              required
            />
          </b-form-group>

          <!-- Botón envío -->
          <div class="d-flex justify-content-end mt-5">
            <b-button type="submit"  v-if="selected"  variant="primary" size="lg" >Submit</b-button>
          </div>

        </b-form>
      </div>
    </div>

  </div>
</template>


<script>

import {optionals} from "@/utils/optionals.util"


export default {
  name: 'homeform',
  data () {
    return {
      form: {
        battleTag: '',
        option: ''
      },
      optional: optionals,
      selected: false
    }
  },
  computed: {



  },
  methods: {
    onSubmit () {
      const { option, battleTag } = this.form
      //this.$router.push({ name: 'Profile', params: { region, battleTag: battleTag.replace('#', '-') } })
    }
  }
}
</script>
