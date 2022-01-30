<template>
  <form v-if="!loggedIn" class="form-inline" @submit.prevent="submit">
    <input type="email" id="email" placeholder="Email" v-model="email" />
    <input type="password" id="pwd" placeholder="Salasana" v-model="password" />
    <button type="submit">Kirjaudu</button>
  </form>

  <div v-else class="form-inline">
    <span class="logoutButton title">Kirjaudu ulos</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: this.$store.state.loggedIn,
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {},
  },
}
</script>
