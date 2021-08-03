<template>
  <div class="navContainer">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <div class="theme-switch-container">
      <div @click="switchtheme('dark')" class="theme-switcher dark"></div>
      <div @click="switchtheme('light')" class="theme-switcher light"></div>
      <div @click="switchtheme('green')" class="theme-switcher green"></div>
      <div @click="switchtheme('dark2')" class="theme-switcher dark2"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    switchtheme(themename) {
      let htmlElement = document.documentElement;
      htmlElement.setAttribute('theme', themename);
    }
  }
};
</script>