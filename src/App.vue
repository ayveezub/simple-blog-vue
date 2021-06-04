<template lang="pug">
main
  router-view
</template>

<style>
@font-face {
  font-family: "Iosevka";
  src: url("~@/assets/fonts/iosevka-light.woff2") format("woff2");
}

body {
  background-color: #020304;
}

#app {
  font-family: Iosevka, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: large;
  text-align: left;
  color: #cccccc;
}

main {
  display: grid;
  grid-template-columns: 1fr min(100%, 65ch) 1fr;
}

main > * {
  grid-column: 2;
}
</style>
