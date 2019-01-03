import Vuex from "vuex";
import axios from "axios";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemons: {
      namespaced: true,

      state: {
        list: [],
        allTypes: [
          "any",
          "none",
          "grass",
          "poison",
          "fire",
          "flying",
          "water",
          "bug",
          "normal",
          "electric",
          "psychic",
          "ground",
          "fairy",
          "ice",
          "steel",
          "dark",
          "fighting",
          "rock",
          "ghost",
          "dragon"
        ],

        type: {
          primary: "any",
          secondary: "any"
        }
      },

      getters: {},

      mutations: {
        setPokemons(state, pokemons) {
          state.list = pokemons;
        },

        setPrimaryType(state, type) {
          state.type.primary = type;
        },

        setSecondaryType(state, type) {
          state.type.secondary = type;
        }
      },

      actions: {
        fetchPokemons(context) {
          axios
            .get(
              `http://localhost:4000/pokemons/${context.state.type.primary}/${
                context.state.type.secondary
              }`
            )
            .then(response => {
              context.commit("setPokemons", response.data);
            });
        }
      }
    }
  }
});
