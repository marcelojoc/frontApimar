import { mount, shallowMount } from '@vue/test-utils' // Con esta línea lo que estamos haciendo es importar mount de la librería de test-utils. 
import App from '@/App.vue'
//const wrapper = mount(App)

//import {huevo, espinaca} from  "./jestTest";
/**
 * Un Wrapper contiene un elemento llamado vm, el cual es la instancia de Vue de la cual estamos haciendo el Wrapper.
    Para comprobar esto, vamos a agregar la siguiente línea de código, en el mismo archivo que estamos usando:
 */
//const vm = wrapper.vm;

describe("Probar que se cambió la propiedad changeTest ", () => {
  test("should click a button", () => {
    const wrapper = shallowMount(App);
    const lastValue = wrapper.vm.changeTest;
    wrapper.find("button").trigger("click");

    expect(wrapper.vm.changeTest).toBe(lastValue + 1);
  });
});

// describe('Se va a probar la calidad de los ingredientes',() => {



//   test('Calidad del huevo', ()  => {

  

//     expect(huevo().estado[0]).toBe('fresco')

//   });



//   test('Calidad de la espinaca', ()  => {



//     expect(espinaca()).toEqual({

//       estado: 1,

//       color: "verde"

//     })

//   });

// })



// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
