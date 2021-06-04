<template lang="pug">
.app-post-card(@click.native.stop="goToPost(post.name)")
  .app-post-card__date {{ post.date }}
  .app-post-card__title {{ post.title }}
  .app-post-card__description {{ post.description }}
</template>

<script>
export default {
  name: "AppPostCard",
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    goToPost(postName) {
      this.$router.push({ name: "Post", params: { postName } });
    },
  },
};
</script>

<style>
.app-post-card {
  display: grid;
  grid-template-areas:
    "title date"
    "description description";
  justify-items: start;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1em;

  background-color: #191f2d;
  border-style: solid;
  border-width: thin;
  border-color: #496898;
  border-radius: 10px;
}

.app-post-card__date {
  grid-area: date;
  justify-self: end;
  color: #8c8c8c;
}

.app-post-card__title {
  grid-area: title;
  font-weight: bold;
  color: #00ff00;
}

.app-post-card__description {
  grid-area: description;
  margin-top: 0.5em;
}
</style>
