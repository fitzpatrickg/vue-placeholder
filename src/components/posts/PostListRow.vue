<template>
<v-card>
  <router-link :to="`/post/${id}`" exact>
    <v-card-title>{{ title }}</v-card-title>
  </router-link>
  <router-link :to="`/users/${userId}`">
    <v-card-subtitle>{{ username }}</v-card-subtitle>
  </router-link>
</v-card>
</template>

<script>
export default {
  name: 'PostListRow',
  props: {
    title: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    id: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
  .v-card {
    text-align: left;
  }
</style>
