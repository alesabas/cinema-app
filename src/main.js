import Vue from 'vue'
import App from '@/App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.http.get('https://api.themoviedb.org/4/list/1?page=1&api_key=da7cb8c3f9982277d4a380df6e223473').then(result => {
    console.log(result.body.results)
}, error => {
    console.error(error);
});

import Vuex from 'vuex';
Vue.use(Vuex);

import BlockUI from 'vue-blockui';
Vue.use(BlockUI);

import VeeValidate, {Validator} from 'vee-validate';
Vue.use(VeeValidate);

import {ClientTable} from 'vue-tables-2'
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');

export const store = new Vuex.Store({
  state: {

  },
  actions: {

  },
  getters: {

  },
  mutations: {

  },
  modules: {

  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  store
})