<template>
<v-content>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>

    <v-card :key="comment.id" v-for="comment in comments">
      <v-row>
        <v-col cols="12">
          <SinglePostComment
            :name="comment.name"
            :body="comment.body"
            :email="comment.email" />
        </v-col>
      </v-row>
    </v-card>
</v-content>
</template>

<script>
import SinglePostComment from './SinglePostComment.vue';

export default {
  name: 'SinglePost',
  components: {
    SinglePostComment,
  },
  data() {
    return {
      post: {},
      comments: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    const postToFind = this.$store.state.posts.find((p) => p.id === parseInt(id, 10));
    this.post = postToFind;

    this.$store.dispatch('getComments', id)
      .then((comments) => {
        this.comments = comments;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>

</style>
