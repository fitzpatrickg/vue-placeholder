<template>
    <v-row>
        <v-col cols="12">
            <h4>{{ this.name }}</h4>
            <p>{{ this.body }}</p>
            <span>{{ this.email }}</span>
        </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'SinglePostComment',
  props: ['name', 'body', 'email'],
};
</script>

<style scoped>

</style>
