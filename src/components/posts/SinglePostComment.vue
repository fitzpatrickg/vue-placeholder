<template>
        <v-card cols="12">
            <v-card-title>{{ this.name }}</v-card-title>
            <v-card-subtitle>{{ this.email }}</v-card-subtitle>
            <v-card-text>{{ this.body }}</v-card-text>
        </v-card>
</template>

<script>
export default {
  name: 'SinglePostComment',
  props: ['name', 'body', 'email'],
};
</script>

<style scoped>

</style>
