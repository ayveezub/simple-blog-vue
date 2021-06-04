<template lang="pug">
.post(@click.native.stop="goToPosts")
  h1.post__title {{ thisPost(postName).title }}
  h4.post__date {{ thisPost(postName).date }}
  .post__text {{ thisPost(postName).text }}
</template>

<script>
import posts from "@/assets/posts.json";

export default {
  props: {
    postName: String,
  },
  computed: {
    posts() {
      return posts;
    },
  },
  methods: {
    thisPost(postName) {
      return posts.find((p) => p.name === postName);
    },
    goToPosts() {
      this.$router.push({ name: "Posts" });
    },
  },
};
</script>

<style>
.post {
  background-color: #191f2d;
  margin-top: 1em;
  padding: 1em;

  border-style: solid;
  border-width: thin;
  border-color: #496898;
  border-radius: 10px;
}

h1.post__title {
  color: #00ff00;
}

h4.post__date {
  color: #8c8c8c;
}
</style>
