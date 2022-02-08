<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <!-- Formulario -->
        <b-form @submit.prevent="searchItems">

          <!-- Grupo 1 (Input texto) -->
          <b-form-group
            id="input-group-1"
            label="BattleTag:"
            label-for="input-text"
            description="Busca tu heroe"
          >
            <b-form-input
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="Nombre del personaje"
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
          <div class="d-flex justify-content-end mt-5 mb-5">
            <b-button type="submit"  v-if="form.option"  variant="primary" size="lg"  >BUscar</b-button>
          </div>

        </b-form>
      </div>
    </div>


  <b-row class="mb-2">
    <b-col>
        <b-card
          title="Nombre del personaje "
          img-src="https://picsum.photos/200/200/?image=27"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2"
          >


          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-col>
    <b-col>        
      <b-card
          title="Card Title"
          img-src="https://picsum.photos/200/200/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2"
          >


          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card></b-col>
    <b-col>        
      <b-card
          title="Card Title"
          img-src="https://picsum.photos/200/200/?image=45"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2"
          >


          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-col>
    <b-col>        
      <b-card
          title="Card Title"
          img-src="https://picsum.photos/200/200/?image=45"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2"
          >


          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-col>

    <b-col>        
      <b-card
          title="Card Title"
          img-src="https://picsum.photos/200/200/?image=45"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2"
          >


          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>

  </b-row>

  </div>
</template>


<script>

import {optionals} from "@/utils/optionals.util"
import api from "@/api/auth";


export default {
  name: 'homeform',
  data () {
    return {
      form: {
        battleTag: '',
        option: ''
      },
      optional: optionals,
      selected: false,
      list : [],
              fields: ['first_name', 'last_name', 'age'],
        items: [
          {  age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          {  age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          {  age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          {  age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    }
  },
  computed: {



  },
  methods: {
    // onSubmit () {
    //   const { option, battleTag } = this.form
    //   this.$router.push({ name: 'Profile', params: { option, battleTag: battleTag.replace('#', '-') } })
    // },

    /**
     * Este metodo hace  la busqueda de el campo de search
     */
    async searchItems(){

      const { option, battleTag } = this.form;

      console.log(option, battleTag);

      try {
        const valores = await api.getCharacters(battleTag)
        console.log(valores);
      } catch (error) {

        console.log('error: ' + error);
      // this.list = valores
      }
      

      // const valores = await api.getCharacters();



    }
  }
}
</script>
