<template>
<v-content>
    <h1>{{ singlePost.title }}</h1>
    <p>{{ singlePost.body }}</p>
</v-content>
</template>

<script>
export default {
  name: 'SinglePost',
  computed: {
    singlePost() {
      const { id } = this.$route.params;
      const post = this.$store.state.posts.find((thePost) => thePost.id === parseInt(id, 10));
      return post;
    },
  },
};
</script>

<style scoped>

</style>
