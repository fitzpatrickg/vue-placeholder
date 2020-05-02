<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Hello from PostList</h1>
      </v-col>
      <v-col
        :key="post.id"
        v-for="post in posts"
        cols="12">
        <router-link
          :to="`/post/${post.id}`" exact>
          <PostListRow
            :title="post.title"/>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostListRow from './PostListRow.vue';

export default {
  name: 'PostList',
  components: {
    PostListRow,
  },
  created() {
    this.$store.dispatch('getPosts');
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
