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
                        <label> Repeat password </label>
                        <input type="password" v-model="repeatPassword">
                    </div>
                    <div class="form-group">
                        <button type="button" v-on:click="registration">Registration</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { registrationToSystem } from '../api/application'

export default {
    name: 'LoginPage',
    data() {
        return {
            username: undefined,
            password: undefined,
            repeatPassword: undefined
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
        registration() {
            registrationToSystem(
                {
                    username: this.username,
                    password: this.password,
                    repeat_password: this.repeatPassword
                }
            ).then((data) => {
                this.$store.dispatch('authStore/login', data).then(() => {
                    if (this.isLoggedIn) {
                        this.$router.push({ name: 'StartPage' })
                    } else {
                        window.alert(data.data.message)
                    }
                })
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
</style>
