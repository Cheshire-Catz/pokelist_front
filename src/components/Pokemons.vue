<template>
  <div>
    <selector :values="types" @onChange="type1OnChange">Primary type</selector>
    <br>
    <selector :values="types" @onChange="type2OnChange">Secondary type</selector>
    <br>
    <pokedex :pokemons="pokemons"></pokedex>
  </div>
</template>

<script>
import pokedex from "@/components/Pokedex.vue";
import selector from "@/components/Selector.vue";
import axios from "axios";

export default {
  components: {
    selector,
    pokedex
  },

  data() {
    return {
      pokemons: [],
      types: [
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
      type1: "any",
      type2: "any"
    };
  },

  created() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      axios
        .get(`http://localhost:4000/pokemons/${this.type1}/${this.type2}`)
        .then(response => {
          this.pokemons = response.data;
        });
    },

    type1OnChange(selected) {
      this.type1 = selected;
      this.fetchItems();
    },

    type2OnChange(selected) {
      this.type2 = selected;
      this.fetchItems();
    }
  }
};
</script>
