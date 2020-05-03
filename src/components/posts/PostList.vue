<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Hello from PostList</h1>
      </v-col>
      <v-col :key="post.id" v-for="post in postTitles" cols="12">
          <PostListRow
            :id="post.id"
            :title="post.title"
            :username="post.username"
            :userId="post.userId" />
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
  computed: {
    postTitles() {
      return this.$store.getters.associateUserAndPost;
    },
  },
};
</script>
