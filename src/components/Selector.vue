<template>
  <form>
    <slot></slot>
    <select @change="onChange" :selected="values[0]">
      <option v-for="(value, index) in values" :key="index" :value="value">{{value}}</option>
    </select>
  </form>
</template>

<script>
export default {
  props: ["values"],

  methods: {
    onChange(evt) {
      console.log(evt);
      this.$emit("onChange", evt.target.value);
    }
  }
};
</script>

<style lang="css">
slot {
  font-weight: bold;
}
</style>
