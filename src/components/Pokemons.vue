<template>
  <div>
    <selector :values="types" @onChange="primaryTypeOnChange">Primary type</selector>
    <br>
    <selector :values="types" @onChange="secondaryTypeOnChange">Secondary type</selector>
    <br>
    <pokedex :pokemons="pokemons"></pokedex>
  </div>
</template>

<script>
import pokedex from "@/components/Pokedex.vue";
import selector from "@/components/Selector.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    selector,
    pokedex
  },

  computed: Object.assign(
    {},
    mapState("pokemons", {
      pokemons: state => state.list,
      types: state => state.allTypes
    })
  ),

  created() {
    this.fetchPokemons();
  },

  methods: Object.assign(
    {
      primaryTypeOnChange(value) {
        this.setPrimaryType(value);
        this.fetchPokemons();
      },

      secondaryTypeOnChange(value) {
        this.setSecondaryType(value);
        this.fetchPokemons();
      }
    },
    mapMutations("pokemons", ["setPrimaryType", "setSecondaryType"]),
    mapActions("pokemons", ["fetchPokemons"])
  )
};
</script>
