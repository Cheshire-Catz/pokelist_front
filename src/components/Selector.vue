<template>
  <form>
    <slot></slot>
    <select v-model="selected" @change="onChange">
      <option v-for="(value, index) in values" :value="value">{{value}}</option>
    </select>
  </form>
</template>

<script>
export default {
  props: ['values'],

  data() {
    return {
      selected: this.values[0]
    };
  },

  methods: {
    onChange: function() {
      this.$emit('onChange', this.selected);
    }
  }
};
</script>

<style lang="css">
slot {
  font-weight: bold;
}
</style>
