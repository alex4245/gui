<template>
  <div id="app">
    <div v-if="isLoggedIn">
        <div class="logInfo">
            {{ username }}
            <button v-on:click="logout()" type="button" class="btn-link">Logout </button>
        </div>
        <nav class="navbar navbar-dark" style="background-color: #e3f2fd;">
            <a
                class="navbar-brand" href="#"
                @click.prevent="navigateTo('StartPage')"
            >
                Main page
            </a>
            <a
                class="navbar-brand"
                @click.prevent="navigateTo('AccountOptions')"
            >
                Account options
            </a>
        </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserData } from './api/application'

export default {
    name: 'App',
    methods: {
        logout() {
            this.$store.dispatch('authStore/logout')
        },
        navigateTo(name) {
            this.$router.push(
                {
                    name
                }
            )
        }
    },
    computed: {
        ...mapGetters({
            isLoggedIn: 'authStore/isLoggedIn',
            username: 'authStore/username'
        })
    },
    updated() {
        if (!this.isLoggedIn && this.$router.history.current.name !== 'RegistrationPage') {
            this.$router.push({ name: 'LoginPage' })
        }
    },
    created() {
        if (!this.isLoggedIn && this.$router.history.current.name !== 'RegistrationPage') {
            this.$router.push({ name: 'LoginPage' })
        }
        getUserData().then((response) => {
            this.$store.dispatch('authStore/getUserData', response.data.user_data)
        })
    },
    watch: {
        isLoggedIn(val) {
            if (val) {
                getUserData().then((response) => {
                    this.$store.dispatch('authStore/getUserData', response.data.user_data)
                })
            }
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.logInfo {
    padding: 3px 20px !important;
    text-align: right !important;
}
</style>
