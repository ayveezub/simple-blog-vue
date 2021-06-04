<template lang="pug">
.posts
  app-post-card(v-for="(post, index) in posts", :post="post", :key="index")
</template>

<script>
import posts from "@/assets/posts.json";
import AppPostCard from "@/components/AppPostCard.vue";

export default {
  name: "Posts",
  components: {
    AppPostCard,
  },
  computed: {
    posts() {
      return posts;
    },
  },
};
</script>
