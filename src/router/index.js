import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);

import Pokemon from '@/components/Pokemons';

export default new Router({
  routes: [
    {
      path: '/pokemons',
      name: 'Pokemons',
      component: Pokemon
    }
  ]
});
