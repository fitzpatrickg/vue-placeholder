<template>
<v-content>
    <h4>{{ title }}</h4>
</v-content>
</template>

<script>
export default {
  name: 'PostListRow',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
