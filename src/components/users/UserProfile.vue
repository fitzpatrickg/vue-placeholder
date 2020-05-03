<template>
    <v-content>
        <h1>{{ getUserInfo.username }}</h1>
    </v-content>
</template>

<script>
export default {
  name: 'UserProfile',
  computed: {
    getUserInfo() {
      const userId = this.$route.params.id;
      return this.$store.state.users.find((u) => u.id === parseInt(userId, 10));
    },
  },
};
</script>

<style scoped>

</style>
