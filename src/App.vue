<template>
  <v-app>
    <v-row>
      <v-col cols="12">
        <h1>Future Nav</h1>
      </v-col>
    </v-row>
    <v-content>
      <PostList />
    </v-content>
  </v-app>
</template>

<script>
import PostList from './components/posts/PostList.vue';

export default {
  name: 'App',

  components: {
    PostList,
  },

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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
