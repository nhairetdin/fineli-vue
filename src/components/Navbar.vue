<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding-top: 30px;
  padding-bottom: 30px;

  a {
    font-weight: bold;
    font-size: 0.9rem;
    color: lightgreen;
    text-decoration: none;

    &.router-link-exact-active {
      color: lightgreen;
      text-decoration: underline;
    }
  }
}
</style>