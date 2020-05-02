<template>
  <v-app>
    <v-content id="container">
      <v-row>
        <v-col cols="12">
          <h1>Future Nav</h1>
        </v-col>
      </v-row>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#container {
  width: 80%;
  margin: 0 auto;
}
</style>
