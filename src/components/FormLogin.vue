<template>
  <form v-if="!loggedIn" class="form-inline" @submit.prevent="submit">
    <input type="email" id="email" placeholder="Email" v-model="email" />
    <input type="password" id="pwd" placeholder="Salasana" v-model="password" />
    <button type="submit">Kirjaudu</button>
  </form>

  <div v-else class="form-inline">
    <span class="logoutButton title" @click="logout">Kirjaudu ulos</span>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    },
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    },
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>
