<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Hello from PostList</h1>
      </v-col>
      <v-col
        :key="post.id"
        v-for="post in postList"
        cols="12">
        <PostListRow
          :title="post.title"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import PostListRow from './PostListRow.vue';

export default {
  name: 'PostList',
  components: {
    PostListRow,
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((posts) => {
        this.postList = posts.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      postList: [],
    };
  },
};
</script>
