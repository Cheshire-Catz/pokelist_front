<template>
  <table>
    <thead>
      <tr>
        <th>Number</th>
        <th>Image</th>
        <th>Name</th>
        <th>Type(s)</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="pokemon in pokemons" :key="pokemon.id">
        <td>{{ pokemon._id }}</td>
        <td>
          <img :src="`${ pokemon.image }`">
        </td>
        <td>{{ pokemon.name }}</td>
        <td>
          <p v-for="(type, index) in pokemon.type" :key="index">{{ type }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['pokemons']
};
</script>


<style lang="css">
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  color: #444;
}

table {
  width: 100%;
  border: 2px solid #3c5aa6;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #3c5aa6;
  font-size: 25px;
  color: #ffcb05;
}

td {
  background-color: #fff;
  font-size: 25px;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>