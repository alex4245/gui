<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="container">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label> Username </label>
                        <input type="text" v-model="username">
                    </div>
                    <div class="form-group">
                        <label> Password </label>
                        <input type="password" v-model="password">
                    </div>
                    <div class="form-group">
                        <button type="button" v-on:click="login">Log in</button>
                        <button type="button" v-on:click="registration">Registraion</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { loginToSystem } from '../api/application'

export default {
    name: 'LoginPage',
    data() {
        return {
            username: undefined,
            password: undefined
        }
    },
    created() {
        if (this.isLoggedIn) {
            this.$router.push({ name: 'StartPage' })
        }
    },
    computed: {
        ...mapGetters({
            isLoggedIn: 'authStore/isLoggedIn'
        })
    },
    methods: {
        login() {
            loginToSystem(
                {
                    username: this.username,
                    password: this.password
                }
            ).then((data) => {
                this.$store.dispatch('authStore/login', data).then(() => {
                    if (this.isLoggedIn) {
                        this.$router.push({ name: 'StartPage' })
                    } else {
                        console.log(data)
                        window.alert(data.data.message)
                    }
                })
            }).catch((error) => {
                console.log(error)
            })
        },
        registration() {
            this.$router.push({ name: 'RegistrationPage' })
        }
    }
}
</script>

<style scoped>
</style>
